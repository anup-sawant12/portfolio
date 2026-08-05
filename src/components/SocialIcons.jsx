import React from "react";

export function GithubIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className || "w-5 h-5"}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className || "w-5 h-5"}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function LeetcodeIcon(props) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className || "w-5 h-5"}
      {...props}
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a1.38 1.38 0 0 0-.414.96c0 .365.143.716.414.96l2.037 2.036a1.37 1.37 0 0 0 1.92 0l7.399-7.397a.576.576 0 0 1 .816.816l-7.399 7.397a1.37 1.37 0 0 0 0 1.92l2.036 2.037a1.37 1.37 0 0 0 1.92 0l9.777-9.777a1.38 1.38 0 0 0 .414-.96 1.366 1.366 0 0 0-.414-.96L14.444.414a1.376 1.376 0 0 0-.961-.414zm-6.866 12.18l-.578.578a.576.576 0 0 1-.816 0l-2.037-2.037a.576.576 0 0 1 0-.816l.578-.578a.576.576 0 0 1 .816 0l2.037 2.037a.576.576 0 0 1 0 .816z" />
    </svg>
  );
}
