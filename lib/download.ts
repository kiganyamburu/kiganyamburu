/**
 * Utility functions for handling file downloads
 */

export const downloadFile = async (url: string, filename?: string): Promise<boolean> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = filename || url.split("/").pop() || "download";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(downloadUrl);
    return true;
  } catch (error) {
    console.error("Download failed:", error);
    return false;
  }
};

export const isFileAvailable = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
};
