export async function createContact(
  name: string,
  email: string,
  message: string
) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/contacts",
    {
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
    }
  );

  return response.ok;
}
