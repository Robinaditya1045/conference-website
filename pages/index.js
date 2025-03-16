/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Head from "next/head";
import { useMediaQuery } from "react-responsive";
import Header from "../components/Header/header";
import cities from "../config/city-lists.json";
import Sponsors from "../components/Sponsors/sponsors";
import About from "../components/About/about";
import TicketCards from "../components/Tickets/ticketCards";
import Heading from "../components/Typography/heading";
import Paragraph from "../components/Typography/paragraph";
import Subscription from "../components/Form/subscription";
import Speaker from "../components/Speaker/speaker";
import speakers from "../config/speakers.json";
import Link from "next/link";
import Button from "../components/Buttons/button";
import Dropdown from "../components/Dropdown/dropdown";

export default function Home() {
  const isTablet = useMediaQuery({ maxWidth: "1118px" });
  const [speakersList, setSpeakersList] = useState([]);
  const [city, setCity] = useState("");
  speakers[0].lists = [];
  speakers.map((speaker) => {
    if (Array.isArray(speaker.lists) && Object.keys(speaker.lists).length > 0) {
      speakers[0].lists.push(...speaker.lists);
    }
  });
  const list = speakers[0].lists.filter((obj, index) => {
    return index === speakers[0].lists.findIndex((o) => obj.name === o.name);
  });
  speakers[0].lists = [...list];

  useEffect(() => {
    setCity(speakers[0]);
    setSpeakersList(speakers[0].lists);
  }, []);
  return (
    <div>
      <Head>
        <title>AsyncAPI Conference</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img
        src="/img/illustra.png"
        className="color-effect"
        alt="background-illustration"
      />
      <Header />
      <div id="about" className="mt-20">
        <About />
      </div>
      <div id="register" className="container mt-20">
        <div className="flex items-center flex-col justify-center">
          <div
            id="speakers"
            className="relative flex flex-col items-center justify-center pt-20"
          >
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="text-lg sm:text-sm text-white font-semi-bold border-b-2 border-blue-400 mb-1">
                  Speakers
                </div>
              </div>
            </div>
            <Heading
              typeStyle="heading-md"
              className="text-gradient text-center lg:mt-10"
            >
              Meet The Speakers
            </Heading>
            <div className="max-w-3xl sm:w-full text-center">
              <Paragraph
                typeStyle="body-lg"
                className="mt-6"
                textColor="text-gray-200"
              >
                Discover the inspiring voices shaping our event, each bringing
                unique insights and expertise to the forefront of their
                respective fields.
              </Paragraph>
            </div>
            <div className="lg:py-20 w-[1130px] lg:w-full">
              <div className="mt-[64px] ">
                {isTablet ? (
                  <div className="w-full">
                    <Dropdown
                      active={city.city}
                      items={speakers}
                      setOptions={setCity}
                      setOptions2={setSpeakersList}
                    />
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <div className="space-x-4 lg:w-full flex justify-between">
                      {speakers.map((speaker) => {
                        return (
                          <div
                            key={speaker.location}
                            onClick={() => {
                              setCity(speaker);
                              setSpeakersList(speaker.lists);
                            }}
                          >
                            <Button
                              className={`w-[120px] ${
                                city.city === speaker.city
                                  ? "gradient-bg"
                                  : "border border-gray btn relative  overflow-hidden  transition-all  rounded  group py-1.5 px-2.5 "
                              }`}
                              overlay={true}
                            >
                              {city.city !== speaker.city && (
                                <>
                                  <span className="transparent-bg "></span>
                                  <span className="relative w-full  rounded transition-colors duration-300 ease-in-out group-hover:text-white">
                                    {speaker.city}
                                  </span>
                                </>
                              )}
                              {city.city === speaker.city && speaker.city}
                            </Button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-[64px] pb-[181px]">
				{Object.keys(speakersList).length > 0 ? (
                  <div className="w-full grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-4">
                    {speakersList.map((speaker, i) => {
                      return (
                        <Speaker
                          key={i}
                          details={speaker}
                          location={city}
                          className="mt-10"
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div className="mt-12 flex items-center justify-center text-center">
                    <div className="w-[720px] lg:w-full">
                      {city.cfp ? <div>
						<Paragraph className="text-gray-200">
                        We are actively accepting speaker applications, and you
                        can start your journey by clicking the button below.
                        Join us on stage and share your valuable insights with
                        our enthusiastic audience!
                      </Paragraph>
					                        <Link
                        legacyBehavior
                        href="https://apidays.typeform.com/to/ILJeAaV8?typeform-source=www.apidays.global#event_name=xxxxx"
                      >
                        <a className="flex justify-center" target="_blank">
                          <Button className="mt-[80px] w-[244px] border border-gray card-bg">
                            Apply as a speaker
                          </Button>
                        </a>
                      </Link>
					  </div> : <div>
						<Heading typeStyle="heading-md-semibold" className="text-gray-200">
                        {city.city} Speakers Coming Soon - Stay Tuned!
                      </Heading>
					  </div> }
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div id="tickets" className="flex items-center flex-col justify-center pt-20">
            <div className="text-lg sm:text-sm text-white font-semi-bold border-b-2 border-blue-400 mb-1">
              Tickets
            </div>
			<div data-test="ticket-section" className="flex flex-col items-center ">
            <Heading
              typeStyle="heading-md"
              className="text-gradient text-center lg:mt-10"
            >
              Get Tickets
            </Heading>
            <div className="max-w-3xl sm:w-full text-center">
              <Paragraph
                typeStyle="body-lg"
                className="mt-6"
                textColor="text-gray-200"
              >
                Experience the Future of Asynchronous Communication: Get Tickets
                for the AsyncAPI Conference!
              </Paragraph>
            </div>
			</div>
			<div className="w-full mt-12"><TicketCards /></div>
          </div>
          {/* <div data-test="ticket-section">
            <Heading
              typeStyle="heading-md"
              className="text-gradient text-center lg:mt-10"
            >
              Get Tickets
            </Heading>
            <div className="max-w-3xl sm:w-full text-center">
              <Paragraph
                typeStyle="body-lg"
                className="mt-6"
                textColor="text-gray-200"
              >
                Experience the Future of Asynchronous Communication: Get Tickets
                for the AsyncAPI Conference!
              </Paragraph>
            </div>
            <div className="w-[1000px] lg:w-full mt-10 flex justify-between lg:flex-col">
              {cities.map((city) => {
                if (city.ended === false) {
                  return (
                    <TicketCards
                      key={city.name}
                      city={city}
                      className="lg:mt-10"
                    />
                  );
                }
              })}
            </div>
          </div> */}
        </div>
      </div>
      <div id="sponsors" className="mt-20">
      <Sponsors
          eventSponsors={[
            {
              image: "/img/logos/apidays.png",
              websiteUrl: "https://www.apidays.global/",
            },
            {
              image: "/img/logos/APICONF-LOGO-White.png",
              websiteUrl: "https://apiconf.net/",
            },
          ]}/>
                </div>
      <div className="mt-5">
        <Subscription />
      </div>
    </div>
  );
}
