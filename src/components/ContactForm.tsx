"use client";

import { useEffect, useRef, useState } from "react";

type ContactFormProps = {
  formTypes: readonly string[];
};

export function ContactForm({ formTypes }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <form
      ref={formRef}
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);

        if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => {
          setSubmitted(false);
          formRef.current?.reset();
        }, 3500);
      }}
    >
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="fname">
            お名前
          </label>
          <input
            type="text"
            id="fname"
            className="form-input"
            placeholder="山田 太郎"
            required
            disabled={submitted}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="fcompany">
            会社名（任意）
          </label>
          <input
            type="text"
            id="fcompany"
            className="form-input"
            placeholder="例：株式会社○○"
            disabled={submitted}
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="femail">
          メールアドレス
        </label>
        <input
          type="email"
          id="femail"
          className="form-input"
          placeholder="your@email.com"
          required
          disabled={submitted}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="ftype">
          ご依頼の内容
        </label>
        <select id="ftype" className="form-select" disabled={submitted} defaultValue="">
          <option value="">選択してください</option>
          {formTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="fmsg">
          プロジェクトの概要
        </label>
        <textarea
          id="fmsg"
          className="form-textarea"
          placeholder="内容・スケジュール・予算感など、分かる範囲でお聞かせください。"
          required
          disabled={submitted}
        />
      </div>

      <button
        type="submit"
        className="btn"
        disabled={submitted}
        style={
          submitted
            ? { background: "#4ade80", color: "#1a1916", cursor: "not-allowed" }
            : undefined
        }
      >
        {submitted ? "送信しました ✓" : "送信する →"}
      </button>
    </form>
  );
}

