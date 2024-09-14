import React, {useEffect} from "react";
import Nav from "../components/Nav/Nav";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import Footer from "../components/Footer/Footer";

const Location = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="font-suse">
      <div className="relative">
        <Nav bgImage="l-header-image" />
        <div className="w-full bg-white absolute bottom-0 pb-16 flex flex-col justify-center items-center">
          <h1 className="lg:text-[11rem] text-8xl py-6 font-bold bg-clip-text text-transparent bg-cover bg-center bg-l-header-image text-center">
            Our Locations
          </h1>
        </div>
      </div>

      <div className="px-5 pb-10">
        <MapContainer
          center={[36.77818, 3.05139]}
          zoom={2}
          scrollWheelZoom={false}
          className="min-h-[30rem] md:w-[70vw] w-[90vw] mx-auto"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[1.29539, 103.85838]}>
            <Popup>
              <b>Corporate Office:</b> Suntec Tower One, 7 Temasek Boulevard,
              #04-01, Singapore 038987
            </Popup>
          </Marker>

          <Marker position={[-6.20344, 106.82141]}>
            <Popup>
              <b>Indonasia office:</b> Wisma 46 - Kota BNI Jalan Jenderal,
              Sudirman Kav. 1 Jakarta 10220 Indonesia
            </Popup>
          </Marker>

          <Marker position={[13.72249, 100.52957]}>
            <Popup>
              <b>Thailand and Vietnam office:</b> Sathorn Square, 98, North
              Sathorn Road Silom, Bangrak Bangkok 10500 Thailand
            </Popup>
          </Marker>

          <Marker position={[-20.485369, 57.587809]}>
            <Popup>
              <b>Mauritius office:</b>Ebene Cyber Tower 1, Cybercity, Ebene
              72201 Mauritius
            </Popup>
          </Marker>

          <Marker position={[30.03535, 31.2292]}>
            <Popup>
              <b>Egypt office:</b>Nile City Towers, Corniche El Nile, Ramlet
              Beaulac, 11221 Cairo, Egypt
            </Popup>
          </Marker>

          <Marker position={[36.77818, 3.05139]}>
            <Popup>
              <b>Algeria Office: </b> El Aurassi Tower 2 Boulevard Frantz Fanon
              El Madania, Algiers 16000 Algeria
            </Popup>
          </Marker>

          <Marker position={[41.4954, -74.10975]}>
            <Popup>
              <b>New York (USA) Office:</b> One World Trade Center 285 Fulton
              Street, Suite 6400 New York, NY 10128 United States
            </Popup>
          </Marker>

          <Marker position={[34.05009, -118.26033]}>
            <Popup>
              <b>California (USA) Office:</b> Wilshire Grand Center 900 Wilshire
              Boulevard, Suite 2500 Los Angeles, CA 90017 United States
            </Popup>
          </Marker>

          <Marker position={[32.78567, -96.8103]}>
            <Popup>
              <b>Texas (USA) Office:</b> The KPMG Plaza at Hall Arts 2323
              Victory Avenue, Suite 2000 Dallas, TX 75219 United States
            </Popup>
          </Marker>

          <Marker position={[41.87891, -87.63549]}>
            <Popup>
              <b>Illinois (USA) Office:</b> Willis Tower 233 South Wacker Drive,
              Suite 7000 Chicago, IL 60606 United States
            </Popup>
          </Marker>

          <Marker position={[43.64738, -79.38098]}>
            <Popup>
              <b>Ontario (CA) Office:</b> The Toronto-Dominion Centre 66
              Wellington Street West, Suite 5300 Toronto, ON M5K 1A1 Canada
            </Popup>
          </Marker>

          <Marker position={[49.2878, -123.1135]}>
            <Popup>
              <b>British Columbia (CA) Office:</b> Canada Place 999 Canada
              Place, Suite 690 Vancouver, BC V6C 3E1 Canada
            </Popup>
          </Marker>

          <Marker position={[-23.56573, -46.65123]}>
            <Popup>
              <b>Brazil Office:</b> Edifício Paulista 100 Avenida Paulista,
              Suite 2000 São Paulo, SP 01311-000 Brazil
            </Popup>
          </Marker>

          <Marker position={[19.43441, -99.15126]}>
            <Popup>
              <b>Mexico Office: </b>Torre Reforma 505 Paseo de la Reforma, Piso
              28 Ciudad de México, CDMX 06600 Mexico
            </Popup>
          </Marker>

          <Marker position={[-33.87051, 151.20892]}>
            <Popup>
              <b>Australia Office:</b> Sydney Tower 100 Market Street, Level 63
              Sydney, NSW 2000 Australia
            </Popup>
          </Marker>

          <Marker position={[37.514194, 127.104015]}>
            <Popup>
              <b>South Korea Office:</b> Lotte World Tower 300 Olympic-ro,
              Songpa-gu Seoul 05551 South Korea
            </Popup>
          </Marker>

          <Marker position={[51.50478, -0.0871]}>
            <Popup>
              <b>London (UK) Office:</b> The Shard 32 London Bridge Street,
              Floor 22 London SE1 9SG United Kingdom
            </Popup>
          </Marker>

          <Marker position={[53.47937, -2.23734]}>
            <Popup>
              <b>Manchester (UK) Office:</b> Manchester One 53 Portland Street,
              Suite 17 Manchester M1 3LD United Kingdom
            </Popup>
          </Marker>

          <Marker position={[52.47529, -1.90675]}>
            <Popup>
              <b>Birmingham (UK) Office:</b> The Cube 196 Wharfside Street,
              Suite 14 Birmingham B1 1RN United Kingdom
            </Popup>
          </Marker>

          <Marker position={[-25.486553, 31.008764]}>
            <Popup>
              <b>Moscow (RUS) Office:</b> Federation Tower Vostok Tower, 12th
              Floor City of Capitals, Moscow City Moscow 123100 Russia
            </Popup>
          </Marker>

          <Marker position={[55.035860,82.918350]}>
            <Popup>
            <b>Novosibirsk (RUS) Office:</b> Vostok Tower Krasny Prospekt 45/1, Floor 8 Novosibirsk 630099 Russia
            </Popup>
          </Marker>

          <Marker position={[48.844240,2.319960]}>
            <Popup>
            <b>France Office: </b>Tour Montparnasse 33 Avenue du Maine, 10th Floor 75015 Paris, France
            </Popup>
          </Marker>

          <Marker position={[48.844240,2.319960]}>
            <Popup>
            <b>France Office: </b>Tour Montparnasse 33 Avenue du Maine, 10th Floor 75015 Paris, France
            </Popup>
          </Marker>

          <Marker position={[50.112550,8.672040]}>
            <Popup>
            <b>Germany Office:</b> Main Tower 60311 Frankfurt am Main, 50th Floor Neue Mainzer Straße 52-58 Frankfurt, Germany
            </Popup>
          </Marker>

          <Marker position={[28.460180,77.049930]}>
            <Popup>
            <b>Haryana (IND) Office:</b> Cyber Tower Plot No. 6, Sector 25A, 7th Floor Gurgaon, Haryana 122018 India
            </Popup>
          </Marker>

          <Marker position={[19.001740,72.829320]}>
            <Popup>
            <b>Maharastra (IND) Office:</b> One Indiabulls Centre 841 Senapati Bapat Marg, Elphinstone Road Mumbai, Maharashtra 400013 
            </Popup>
          </Marker>

          <Marker position={[22.571387,88.430636]}>
            <Popup>
            <b>Kolkata (IND) Office:</b> The 42 Office 1201, 12th Floor Plot No. AP-1, Sector V, Salt Lake City Kolkata, West Bengal 700091 India
            </Popup>
          </Marker>

          <Marker position={[31.240474,121.498955]}>
            <Popup>
            <b>Shanghai Office:</b> Shanghai Tower Level 52, Office 5201 501 Yincheng Middle Road Lujiazui, Pudong Shanghai 200120 China
            </Popup>
          </Marker>

          <Marker position={[6.051260,80.182630]}>
            <Popup>
            <b>Sri Lanka Office:</b> Crescat Boulevard 2nd Floor, 88 Galle Road Colombo 03 Sri Lanka
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="slides-container text-white mb-12">
            <div className="blur_sheet border-2 max-w-xl mx-auto p-5 md:rounded-3xl">
              <h5 className="mx-auto lg:max-w-lg max-w-xl tracking-widest">
              <b>Corporate Office:</b> Suntec Tower One, 7 Temasek Boulevard, #04-01, Singapore 038987
              </h5>
              <h5 className="mx-auto lg:max-w-lg max-w-xl tracking-widest">
              <b>Enquery No:</b> +65 (836) 502 38
              </h5>
            </div>
          </div>

      <Footer />
    </div>
  );
};

export default Location;
