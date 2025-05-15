import { useEffect } from "react";

/**
 * Custom hook to update the document title
 * @param {string} title - The title to display
 * @param {boolean} [includeAppName=true] - Whether to include the app name
 */
export const useDocumentTitle = (title, includeAppName = true) => {
  useEffect(() => {
    const appName = "Argent Bank";
    document.title = includeAppName ? `${appName} - ${title}` : title;
  }, [title, includeAppName]);
};
