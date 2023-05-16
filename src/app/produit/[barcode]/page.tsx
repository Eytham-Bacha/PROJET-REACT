
import Image from "next/image";
import style from "./page.module.css";

export function Photo({ src, width, height }) {
  
  return (
    <div>
      <Image src={src} alt="Photo du produit" height={height}
                        width={width} />
    </div>
  );
}

export default async function Home({ params: { barcode } }) {
  let product;
const fields = [
  "brands",
  "product_name",
  "product_name_fr",
  "generic_name",
  "generic_name_fr",
  "quantity",
  "code",
  "packaging",
  "categories",
  "labels",
  "stores",
  "countries",
  "ingredients_text_fr",
  "allergens_imported",
  "allergens",
  "ingredients_n",
  "image_front_url",
  "images"
];

  const apiURL = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json?fields=${fields.join(",")}`;
  console.log(apiURL);

  await fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.status_verbose);
      product = data.product;
      // setProduct(data.product);
    })
    .catch((error) => {
      console.error(error);
    });

  if (!product) {
    return (
    <div className={style.booodi}><strong>
      <div className="txt">
        Aucun article n'est disponible avec ce code barre
         <br/>Veuillez vérifié si le code barre saisi est conforme. &#x26A0;
      </div>
    </strong><br/>
     <div className="imageee">
       <Image
       src="/photo attention-PhotoRoom.png-PhotoRoom.png"
       alt="photo attention"
       className=" w-100 mt-4"
       width={800}
       height={548}
       
       
       />
     </div>
     </div>)
  };

  return (
    <div className={style.body}>
      <div>
        <div className="card mx-3 mb-3 border border-dark">
          <div className={style.produit}>
            <div className="row">
              <div className="col-md-6 text-center mt-3">
               
                      <Photo
                      className="border border-dark"
                        src={product.image_front_url?`${product.image_front_url}`:""}
                        alt="photo Boite Kinder"
                        height={product.images[1].sizes[400].h}
                        width={product.images[1].sizes[400].w}
                        
                      />
                    
              </div>
              <div className="col-md-6">
                <div id="information">
                  <h1 className="nom_produit">
                    
                    {product.product_name || product.product_name_fr}-{product.quantity}
                   

                    
                  </h1>
                  <p className="my-md-5">
                    Certaines informations de ce produit ont été fournies
                    directement par son fabricant "{product.brands}".
                  </p>
                </div>
              </div>

              <div className="row mx-md-2">
                <div className="col-md-">
                  <br className="mb-3" />
                  <strong>Code-barres :</strong>
                  <span id="code-b">{product.code}</span>
                  <br className="mb-3" />
                  <strong>Nom générique :</strong>
                  <span id="nom-g">
                    {product.generic_name_fr || product.generic_name}
                  </span>
                  <br className="mb-3" />
                  <strong>Quantité :</strong>
                  <span id="qtt">{product.quantity}</span>
                  <br className="mb-3" />
                  <strong>Conditionnement :</strong>
                  <span id="package">
                    {product.packaging?.replaceAll(
        "en:",
        " "
      )}
                  </span>
                  <br className="mb-3" />
                  <strong>Marques :</strong>
                  <span id="mark">{product.brands}</span>
                  <br className="mb-3" />
                  <strong>Catégories:</strong>
                  <span id="cate">
                    {product.categories}
                  </span>
                  <br className="mb-3" />
                  <strong>Labels, certifications, récompenses :</strong>
                  <span id="lab">{product.labels?.replaceAll("fr:","")}</span>
                  <br />
                  <Image
                    src="/photo-label-PhotoRoom.png-PhotoRoom.png"
                    alt="photo label"
                    height={70}
                    width={90}
                  />
                  <br className="mb-3" />
                  <strong>Magasins :</strong>
                  <span id="mags">
                    {product.stores}
                  </span>
                  <br className="mb-3" />
                  <strong>Pays de vente :</strong>
                  <span id="pays">
                    {product.countries}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mx-3 mb-3 border border-dark ">
          <div className={style.ingredients}>
            <h1 className="text-center">
              <strong>Ingrédients</strong>
            </h1>
            <div className="row">
              <div className="col-3 col-md-1 ms-md-4">
                <Image
                  src="/svg-cuisine.svg"
                  alt="Icone cuisine"
                  height={100}
                  width={100}
                />
              </div>
              <p className="col-9 col-md-10 align-self-center">
                {product.ingredients_n} Ingrédient(s)
              </p>
            </div>
            <span className="px-4" id="ingr">
             {product.ingredients_text_fr?.replaceAll("_","")}
            </span>
            <br className="mb-3" />
            <strong className="px-4">Allergènes :</strong>
            <span id="allgs" className="px-4">
              {product.allergens_imported ||product.allergens?.replaceAll("en:","")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
