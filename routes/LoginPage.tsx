import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Bannière supérieure */}
      <header className="w-full bg-black py-4">
        <h1 className="text-center text-white text-2xl font-bold">
          Tree Learning
        </h1>
      </header>

      {/* Conteneur principal */}
      <div className="flex w-11/12 max-w-4xl mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Section de connexion */}
        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold text-center mb-6">Login In</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500"
            />
            <div className="flex items-center space-x-2 text-sm">
              <input type="checkbox" id="keep-logged-in" className="h-4 w-4" />
              <label htmlFor="keep-logged-in" className="text-gray-600">
                Keep me logged in
              </label>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-200">
              Se connecter
            </button>
          </form>
          <p className="text-center text-sm mt-4 text-gray-600">
            Mot de passe oublié?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Réinitialiser
            </a>
          </p>
        </div>

        {/* Section d'information */}
        <div className="w-1/2 p-10 bg-gray-50 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Company Logo
          </h2>
          <p className="text-gray-600 text-sm">
            Here you can include additional information about the company or any
            relevant content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
