async function getBackendMessage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  try {
    const res = await fetch(apiUrl, { cache: "no-store" });
    if (!res.ok) {
      return { error: `Backend responded with ${res.status}` };
    }
    return await res.json();
  } catch {
    return { error: "Could not reach backend. Is it running?" };
  }
}

export default async function HomePage() {
  const data = await getBackendMessage();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Sell It</h1>
      <p>Frontend is running.</p>
      {"message" in data ? (
        <p>Backend: {data.message}</p>
      ) : (
        <p style={{ color: "crimson" }}>{data.error}</p>
      )}
    </main>
  );
}
