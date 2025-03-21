export async function getSkills() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/skills`;

  try {
    const res = await fetch(url, {
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
