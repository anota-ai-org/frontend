import Image from "next/image";

import Logo from "../assets/anotai-logo.svg";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "rgb(105,178,75)",
        background:
          "linear-gradient(0deg, rgba(105,178,75,1) 0%, rgba(21,75,174,1) 100%)",
        height: "100vh",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={Logo} alt="logo do sistema" style={{ width: "200px" }} />
          <p
            style={{
              fontSize: "24px",
              textAlign: "right",
              marginLeft: "114px",
              marginTop: "30px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Aliquet dui facilisis
            bibendum eget convallis tempus suspendisse lectus sodales. Sed odio
            id morbi non. Massa aliquet imperdiet massa eget ac enim et
            accumsan. Neque cursus augue ut a auctor in maecenas ipsum. Netus
            dui pretium aliquam arcu egestas rutrum libero faucibus varius. Quam
            amet massa eu elementum nunc.
          </p>
        </div>
        <div>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              width: "506px",
              height: "704px",
              borderRadius: "22px",
              border: "2px solid #CCC",
              marginLeft: "70px",
              marginTop: "40px",
              padding: "10px 25px",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                fontSize: "48px",
                fontWeight: "bold",

                marginTop: "60px",
              }}
            >
              Anotaí
            </h1>
            <label
              style={{
                fontSize: "20px",
                lineHeight: "28px",
                fontWeight: "bold",

                marginBottom: "5px",
              }}
            >
              Nome*
            </label>
            <input
              placeholder="Insira seu nome"
              style={{
                padding: "10px 10px",
                borderRadius: "6px",
                marginBottom: "10px",
              }}
            />
            <label
              style={{
                fontSize: "20px",
                lineHeight: "28px",
                fontWeight: "bold",

                marginBottom: "5px",
              }}
            >
              E-mail*
            </label>
            <input
              style={{
                padding: "10px 10px",
                borderRadius: "6px",
                marginBottom: "10px",
              }}
              placeholder="Insira seu email"
            />
            <label
              style={{
                fontSize: "20px",
                lineHeight: "28px",
                fontWeight: "bold",

                marginBottom: "5px",
              }}
            >
              O que não pode faltar no seu app de estudos*
            </label>
            <input
              style={{
                padding: "10px 10px",
                borderRadius: "6px",
                marginBottom: "10px",
              }}
              placeholder="Nos dê sua opinião..."
            />
            <p style={{ marginBottom: "20px" }}>
              Lorem ipsum dolor sit amet consectetur. Feugiat lorem mauris nibh
              amet malesuada massa cursus amet mattis. Aliquet scelerisque
              dignissim ut diam tristique vitae ullamcorper. Pharetra lacus at
              enim dolor enim lectus. Cursus placerat lectus netus vitae et cras
              tortor. Adipiscing mattis volutpat massa sed. Nulla nunc justo
              mattis facilisis eget et eget nunc augue. Venenatis orci pharetra
              nec odio. At sit ridiculus.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <input type="checkbox" style={{ width: "20px" }} />
              <span style={{ fontSize: "20px", marginLeft: "7px" }}>
                Aceito os Termos e Condições
              </span>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
