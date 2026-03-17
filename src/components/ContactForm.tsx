'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-[13px] font-semibold font-noto mb-2.5 text-[#18212d]">이름</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="이름을 입력하세요"
            className="w-full px-4 py-3.5 rounded-xl border border-black/[0.06] bg-[#fafafa] text-[14px] placeholder:text-[#d9d9d9] focus:ring-2 focus:ring-mir-orange/20 focus:border-mir-orange/40 transition-all"
          />
        </div>
        <div>
          <label className="block text-[13px] font-semibold font-noto mb-2.5 text-[#18212d]">이메일</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="이메일을 입력하세요"
            className="w-full px-4 py-3.5 rounded-xl border border-black/[0.06] bg-[#fafafa] text-[14px] placeholder:text-[#d9d9d9] focus:ring-2 focus:ring-mir-orange/20 focus:border-mir-orange/40 transition-all"
          />
        </div>
      </div>
      <div>
        <label className="block text-[13px] font-semibold font-noto mb-2.5 text-[#18212d]">연락처</label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="전화번호를 입력하세요"
          className="w-full px-4 py-3.5 rounded-xl border border-black/[0.06] bg-[#fafafa] text-[14px] placeholder:text-[#d9d9d9] focus:ring-2 focus:ring-mir-orange/20 focus:border-mir-orange/40 transition-all"
        />
      </div>
      <div>
        <label className="block text-[13px] font-semibold font-noto mb-2.5 text-[#18212d]">문의사항</label>
        <textarea
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="문의사항을 입력하세요"
          rows={5}
          className="w-full px-4 py-3.5 rounded-xl border border-black/[0.06] bg-[#fafafa] text-[14px] placeholder:text-[#d9d9d9] resize-y focus:ring-2 focus:ring-mir-orange/20 focus:border-mir-orange/40 transition-all"
        />
      </div>
      <div className="flex items-center justify-between pt-2">
        {status === 'success' && (
          <p className="text-emerald-500 text-[13px] font-medium">문의가 성공적으로 접수되었습니다!</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 text-[13px] font-medium">오류가 발생했습니다. 다시 시도해주세요.</p>
        )}
        {status === 'idle' && <div />}
        {status === 'loading' && <div />}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-[#18212d] text-white px-10 py-3.5 rounded-full text-[14px] font-semibold hover:bg-[#2a3544] transition-all hover:shadow-lg hover:shadow-black/10 active:scale-[0.98] disabled:opacity-50"
        >
          {status === 'loading' ? '전송 중...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
