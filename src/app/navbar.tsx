import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isAnimated, setIsAnimated] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const codeBarre = event.currentTarget.CodeBarre.value;

    router.push(`/produit/${codeBarre}`);

    // Ajoute la classe "animate" pour lancer l'animation
    setIsAnimated(true);

    // Retire la classe "animate" après la fin de l'animation
    setTimeout(() => setIsAnimated(false), 1000);
  };

  return (
    <nav className="navbar" aria-label="navbar site" id="navsite">
      <div className="container-fluid">
        <div className="row ms-4">
          <a className="navbar-brand"></a>
          <div className="col-4 col-xl-6 align-self-center">
            <h1>Yuk&apos;AFPA</h1>
          </div>
          <div className="col-8 col-md-6 img">
            <Link href="/">
              <Image
                src="/Logo Yuk'AFPA 2-PhotoRoom.png-PhotoRoom.png"
                alt="logo Yuk'AFPA"
                height={120}
                width={120}
                className={isAnimated ? "animate" : ""}
              />
            </Link>
          </div>
        </div>
        <h3 className="slogan">"Avec Yuk'AFPA, c'est plus facile de manger mieux"</h3>
        &nbsp;
        <div className="row w-100 justify-content-end">
          <form
            className="col-lg-3 d-flex"
            role="search"
            onSubmit={handleSubmit}
          >
            <input
              className="form-control"
              id="searchInput"
              name="CodeBarre"
              type="search"
              placeholder="Chercher un produit"
              aria-label="Search"
            />
            <button
              className="btn btn-light ms-2 clicked"
              type="submit"
              title="za"
            >
              <Image
                src="/search.svg"
                alt="Bouton rechercher"
                width={20}
                height={20}
              />
            </button>
          </form>
        </div>
        <a href="/A-propos" className="PROD ms-5">
          Qui Sommes Nous ?
        </a>
      </div>
    </nav>
  );
}