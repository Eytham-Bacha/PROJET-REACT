import Image from 'next/image'
import styles from './page.module.css'

export default function srr() {
  return (
    <div className={styles.bodi}>
        <h1 className="text-center mb-5">
        Scannez les étiquettes de vos produits alimentaires
          </h1>
          <h3 className={styles.h3}>
        <div className="row">
          <div className="col-md-4">
            <Image
              src="/photo opf-PhotoRoom.png-PhotoRoom.png"
              alt="photo open food fact"
              className='img-fluid'
              width={400}
              height={0}
            />
          </div>
          <div className="col-md-8 mt-4">
            <div className="ms-4">
                <Image src="/icons8-fork-and-knife-48.png"
                alt="couvert" width={60} height={60} /> &ensp;
                <strong>Analyse alimentaire</strong>
            </div>
            <br />
            <p className="mx-md-5">
              Yuk'AFPA analyse les produits alimentaires et vous explique
              l'évaluation de chaque produit dans une fiche produit détaillée.
            </p>
          </div>
          <br className="mb-5" />
          <hr className="d-md-none" />
          <div className="row">
            <div className="col-md-8 mt-5">
              <p>
                <strong>
                  Scannez votre nourriture et informez-vous sur ce que vous
                  mangez.
                </strong>
                <br className="mb-3" />
                Faites partie de notre base de données collaborative, gratuite et
                ouverte sur les produits alimentaires du monde entier.
              </p>
            </div>
            <div className="col-md-4 mt-md-5">
              <Image
                src="/photo scan-PhotoRoom.png-PhotoRoom.png"
                alt="photo scan"
                className="img-fluid"
                width={400}
                height={0}
              />
            </div>
            <br className="mb-5" />
            <hr className="d-md-none" />
          </div>
          <div className="row align-items-center">
            <div className="col-6 col-md-4 mt-5 ">
              <Image
                src="/photo loupe off-PhotoRoom.png-PhotoRoom.png"
                alt="photo loupe"
                className="img-fluid ms-5"
                width={150}
                height={0}
              />
            </div>
            <div className="col-6 col-md-7  text-center ">
              <strong >Les Données Alimentaires Public et Gratuite !</strong>
              <br className="mb-4" />
            </div>
          </div>
          Une base de données sur les produits alimentaires Yuk'AFPA est une base
          de données de produits alimentaires contenant des ingrédients, des
          allergènes, des données nutritionnelles et toutes les informations que
          nous pouvons trouver sur les étiquettes des produits.
          <br className="mb-5" />
          Les données sur les denrées alimentaires présentent un intérêt public et
          doivent être ouvertes.
          <br className="mb-5" />
          La base de données complète est publiée en tant que données ouvertes et
          peut être réutilisée par n'importe qui et pour toute utilisation.
          <br className="mb-5" />
          Fournir des données ouvertes, des connaissances, des outils est un appui
          pour chacun permettant de donner des moyens d'avoir le plus d'impact
          positif sur le système alimentaire :
          <br className="mb-3" />
          <ul>
            <li>
              Pour que les consommateurs puissent faire des choix alimentaires
              mieux informés.
            </li>
            <li>
              Faire en sorte que les producteurs de denrées alimentaires
              déterminent les moyens d'améliorer la qualité de leurs produits et
              soient encouragés à l'améliorer.
            </li>
            <li>
              Pour les scientifiques, améliorer la connaissance collective du long
              terme, les impacts sur ce que nous mangeons sur notre santé,
              l'environnement et la société.
            </li>
            <li>
              Pour les États, décider des meilleures politiques de santé publique
              et favoriser leur adoption.
            </li>
            <li>
              Pour les individus, les universités, les organisations à but non
              lucratif, les startups et les entreprises pour traiter efficacement
              les problèmes liés au système alimentaire et les déployer rapidement
              dans le monde entier.
            </li>
          </ul>
          <br className="mb-5" />
          <hr className="d-md-none" />
          <p className="text-center">
            Faites de meilleurs choix alimentaires avec Yuk'AFPA !
            <br />
            La connaissance, c'est le pouvoir.
            <br />
            La connaissance alimentaire, c'est le pouvoir de mieux manger.
          </p>
          <br className="mb-5" />
          <hr className="d-md-none" />
          <div className="col-md-5 mt-5">
            <Image
              src="/stephane chocolat.jpg"
              alt="photo stephane"
              className="img-fluid"
              width={600}
                height={0}
            />
          </div>
          <br className="mb-5" />
          <div className="col-md-6 mt-md-4 p-0 ">
            Pour garantir que nous parvenions au plus grand bien commun possible,
            tout ce que nous produisons est lui-même un bien commun librement
            réutilisable: toutes nos données sont des données ouvertes et tous nos
            logiciels sont open source.
            <br />
            La base de données Yuk'AFPA est une ressource mondiale unique utilisée
            par les scientifiques pour étudier les effets à long terme des
            aliments que nous consommons.
          </div>
          <br className="mb-5" />
          Il permet aussi d'élaborer des outils tels que des systèmes de notation
          pour informer la demande et encourager les améliorations aux produits.
          En plus de rendre les données brutes sur les produits directement
          accessibles à tous les scientifiques du monde entier, nous structurerons
          et analysons les données pour les rendre beaucoup plus utiles pour leurs
          recherches. Nous travaillons également directement avec les équipes de
          recherche pour comprendre comment nous pouvons répondre à leurs besoins,
          et pour rendre les résultats de leurs recherches instantanément
          accessibles à tous les autres chercheurs.
        </div>
          </h3>
    </div>
  )
}