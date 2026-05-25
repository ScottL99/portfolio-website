export type ThemeMode = "dark" | "light";

export const THEME_STORAGE_KEY = "portfolio-theme";

export const themeInitScript = `
(() => {
  try {
    const savedTheme = window.localStorage.getItem("${THEME_STORAGE_KEY}");
    const systemLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const theme = savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : systemLight
        ? "light"
        : "dark";

    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

export function getPreferredTheme(): ThemeMode {
  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}
