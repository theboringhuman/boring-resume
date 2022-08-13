import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const ToggleButton = styled.button`
  --toggle-width: 80px;
  --toggle-height: 38px;
  --toggle-padding: 4px;
  --color-bg-toggle: #1e90ff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background: var(--color-bg-toggle);
  transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:hover {
    box-shadow: 0 0 5px 2px var(--color-bg-toggle);
  },
`;

type ToggleThumbProps = {
  activeTheme: string;
}
const ToggleThumb = styled.span<ToggleThumbProps>`
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: white;
  transition: transform 0.25s ease-in-out;
  transform: ${({ activeTheme }) =>
    activeTheme === "dark"
      ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
      : "none"};
`;

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState(document?.body?.dataset?.theme ? document.body.dataset.theme : 'light');
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    savedTheme && setActiveTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  return (
    <ToggleButton
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      type="button"
      onClick={() => setActiveTheme(inactiveTheme)}>
      <ToggleThumb activeTheme={activeTheme} />
      <span>☀️</span>
      <span>🌙</span>
    </ToggleButton>
  );
};

export default ThemeToggle;