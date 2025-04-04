export async function createContact(
  name: string,
  email: string,
  message: string
) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) {
    console.error("NEXT_PUBLIC_API_URL is not defined");
    return null;
  }

  let apiUrl;
  try {
    apiUrl = new URL("/api/contacts", baseUrl).toString();
  } catch (error) {
    console.error("Invalid API base URL:", error);
    return null;
  }
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        name: name,
        email: email,
        message: message,
      },
    }),
  });

  return response.ok;
}
