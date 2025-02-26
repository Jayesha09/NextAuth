export default function Home() {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/auth.jpg')" }}
      >
        {" "}
        <h1 className="text-6xl pt-40 font-bold text-center ">
          Welcome to NextAuth
        </h1>
        <p className="text-lg text-gray-900 text-center mb-6 pt-8">
          Experience seamless and secure authentication to protect your data and
          enhance your journey.
        </p>
      </div>
    </div>
  );
}
