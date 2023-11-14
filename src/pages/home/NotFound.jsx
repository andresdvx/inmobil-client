const NotFound = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <img
        src="ilustracion-casa.webp"
        alt="Casa no encontrada"
        className="w-full max-w-md rounded-lg mb-6"
      />
      <h2 className="text-4xl font-bold mb-2">404 - Página no encontrada</h2>
      <p className="text-gray-600">La página solicitada no se pudo encontrar o no está disponible.</p>
    </div>
  );
};

export default NotFound;
