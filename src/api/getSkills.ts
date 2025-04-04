export async function getSkills() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) {
    console.error("NEXT_PUBLIC_API_URL is not defined");
    return null;
  }
  let apiUrl;
  try {
    apiUrl = new URL("/api/skills", baseUrl).toString();
  } catch (error) {
    console.error("Invalid API base URL:", error);
    return null;
  }
  try {
    const res = await fetch(apiUrl, {
      method: "GET",
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();

    return data?.data || null;
  } catch (error) {
    console.error("Error fetching skill data:", error);
    return null;
  }
}
