'use client';

import { useState, useEffect, useCallback } from 'react';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selected, setSelected] = useState<Contact | null>(null);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');

  const fetchContacts = useCallback(async () => {
    const res = await fetch('/api/admin/contacts');
    if (res.ok) {
      const data = await res.json();
      setContacts(data);
    }
  }, []);

  useEffect(() => {
    if (authenticated) fetchContacts();
  }, [authenticated, fetchContacts]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setAuthenticated(true);
      setError('');
    } else {
      setError('비밀번호가 틀렸습니다.');
    }
  };

  const toggleRead = async (contact: Contact) => {
    await fetch('/api/admin/contacts', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: contact.id, is_read: !contact.is_read }),
    });
    fetchContacts();
    if (selected?.id === contact.id) {
      setSelected({ ...contact, is_read: !contact.is_read });
    }
  };

  const deleteContact = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;
    await fetch('/api/admin/contacts', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (selected?.id === id) setSelected(null);
    fetchContacts();
  };

  const filtered = contacts.filter((c) => {
    if (filter === 'unread') return !c.is_read;
    if (filter === 'read') return c.is_read;
    return true;
  });

  const unreadCount = contacts.filter((c) => !c.is_read).length;

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-6">
        <div className="w-full max-w-[380px]">
          <div className="text-center mb-10">
            <div className="w-14 h-14 bg-[#18212d] rounded-2xl flex items-center justify-center mx-auto mb-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
            </div>
            <h1 className="text-[24px] font-bold text-[#18212d] font-dm">관리자 로그인</h1>
            <p className="text-[14px] text-[#9ca3af] mt-2">문의 관리 페이지에 접근하려면 비밀번호를 입력하세요.</p>
          </div>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
              autoFocus
              className="w-full px-4 py-3.5 rounded-xl border border-black/[0.08] bg-white text-[15px] text-center tracking-[0.3em] placeholder:tracking-normal focus:ring-2 focus:ring-[#18212d]/10 focus:border-[#18212d]/20 transition-all mb-4"
            />
            {error && <p className="text-red-500 text-[13px] text-center mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#18212d] text-white py-3.5 rounded-xl text-[14px] font-semibold hover:bg-[#2a3544] transition-all"
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Top bar */}
      <div className="bg-white border-b border-black/[0.04] sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 h-[60px] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-[18px] font-bold text-[#18212d] font-dm">MIR TECH</h1>
            <span className="text-[12px] text-[#9ca3af] bg-[#f5f5f7] px-3 py-1 rounded-full">Admin</span>
          </div>
          <div className="flex items-center gap-4">
            {unreadCount > 0 && (
              <span className="bg-red-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                {unreadCount} 미확인
              </span>
            )}
            <button
              onClick={() => setAuthenticated(false)}
              className="text-[13px] text-[#9ca3af] hover:text-[#18212d] transition-colors"
            >
              로그아웃
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: '전체 문의', count: contacts.length, color: 'bg-[#18212d]' },
            { label: '미확인', count: unreadCount, color: 'bg-red-500' },
            { label: '확인 완료', count: contacts.length - unreadCount, color: 'bg-emerald-500' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-6 border border-black/[0.04]">
              <p className="text-[12px] text-[#9ca3af] mb-2">{stat.label}</p>
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${stat.color}`} />
                <span className="text-[28px] font-bold text-[#18212d] font-dm">{stat.count}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-6">
          {([
            { key: 'all', label: '전체' },
            { key: 'unread', label: '미확인' },
            { key: 'read', label: '확인 완료' },
          ] as const).map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${
                filter === f.key
                  ? 'bg-[#18212d] text-white'
                  : 'bg-white text-[#9ca3af] hover:text-[#18212d] border border-black/[0.06]'
              }`}
            >
              {f.label}
            </button>
          ))}
          <button
            onClick={fetchContacts}
            className="ml-auto px-4 py-2 rounded-lg text-[13px] font-medium bg-white text-[#9ca3af] hover:text-[#18212d] border border-black/[0.06] transition-all"
          >
            새로고침
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6">
          {/* List */}
          <div className="space-y-2 max-h-[calc(100vh-320px)] overflow-y-auto pr-1">
            {filtered.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-black/[0.04]">
                <p className="text-[#d9d9d9] text-[14px]">문의가 없습니다.</p>
              </div>
            ) : (
              filtered.map((contact) => (
                <div
                  key={contact.id}
                  onClick={() => { setSelected(contact); if (!contact.is_read) toggleRead(contact); }}
                  className={`bg-white rounded-xl p-5 cursor-pointer transition-all border ${
                    selected?.id === contact.id
                      ? 'border-[#18212d]/20 shadow-lg shadow-black/[0.04]'
                      : 'border-black/[0.04] hover:border-black/[0.08]'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {!contact.is_read && <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />}
                      <span className={`text-[15px] font-semibold ${!contact.is_read ? 'text-[#18212d]' : 'text-[#9ca3af]'}`}>
                        {contact.name}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#d9d9d9] shrink-0">{formatDate(contact.created_at)}</span>
                  </div>
                  <p className="text-[13px] text-[#9ca3af] truncate">{contact.message}</p>
                </div>
              ))
            )}
          </div>

          {/* Detail */}
          {selected ? (
            <div className="bg-white rounded-2xl p-8 border border-black/[0.04] sticky top-[84px] self-start">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-[22px] font-bold text-[#18212d] mb-1">{selected.name}</h2>
                  <p className="text-[13px] text-[#9ca3af]">{formatDate(selected.created_at)}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleRead(selected)}
                    className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all ${
                      selected.is_read
                        ? 'bg-[#f5f5f7] text-[#9ca3af] hover:bg-gray-200'
                        : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
                    }`}
                  >
                    {selected.is_read ? '미확인으로' : '확인 완료'}
                  </button>
                  <button
                    onClick={() => deleteContact(selected.id)}
                    className="px-3 py-1.5 rounded-lg text-[12px] font-medium bg-red-50 text-red-500 hover:bg-red-100 transition-all"
                  >
                    삭제
                  </button>
                </div>
              </div>

              <div className="space-y-5 mb-8">
                {[
                  { label: '이메일', value: selected.email },
                  { label: '연락처', value: selected.phone || '-' },
                ].map((info) => (
                  <div key={info.label}>
                    <p className="text-[11px] text-[#9ca3af] tracking-[0.1em] uppercase mb-1">{info.label}</p>
                    <p className="text-[15px] text-[#18212d]">{info.value}</p>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-[11px] text-[#9ca3af] tracking-[0.1em] uppercase mb-3">문의 내용</p>
                <div className="bg-[#fafafa] rounded-xl p-5">
                  <p className="text-[14px] text-[#54595f] leading-[1.8] whitespace-pre-wrap">{selected.message}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-black/[0.04] flex flex-col items-center justify-center min-h-[400px]">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d9d9d9" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="3"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
              <p className="text-[#d9d9d9] text-[14px] mt-4">문의를 선택하세요</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
