import React, { useState, useRef, useEffect } from "react";

export default function CustomSelect({
  options = [],
  value,
  onChange,
  ariaLabel,
}) {
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const buttonRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (open) {
      // focus the list container for keyboard events
      listRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    function onDoc(e) {
      if (!buttonRef.current) return;
      if (buttonRef.current.contains(e.target)) return;
      if (listRef.current && listRef.current.contains(e.target)) return;
      setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const toggle = () => setOpen((s) => !s);

  const handleKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlighted((h) => Math.min(h + 1, options.length - 1));
      setOpen(true);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlighted((h) => Math.max(h - 1, 0));
      setOpen(true);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const opt = options[highlighted];
      if (opt) onChange(opt);
      setOpen(false);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div className="custom-select">
      <button
        type="button"
        ref={buttonRef}
        className="custom-select-button input"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel || "Select an option"}
        onClick={toggle}
        onKeyDown={handleKey}
      >
        <span className="custom-select-value">{value || options[0] || ""}</span>
        <span className="custom-select-caret" aria-hidden>
          ▾
        </span>
      </button>

      {open && (
        <ul
          tabIndex={-1}
          ref={listRef}
          role="listbox"
          aria-activedescendant={`opt-${highlighted}`}
          className="custom-select-list"
          onKeyDown={handleKey}
        >
          {options.map((opt, idx) => (
            <li
              id={`opt-${idx}`}
              key={idx}
              role="option"
              aria-selected={value === opt}
              className={`custom-select-item ${
                highlighted === idx ? "custom-select-item--active" : ""
              }`}
              onMouseEnter={() => setHighlighted(idx)}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
