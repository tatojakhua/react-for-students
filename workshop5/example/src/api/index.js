export async function getData() {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    throw new Error("Something unExpected happened");
  } catch (error) {
    throw new Error(error.message);
  }
}
