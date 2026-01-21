import Head from 'next/head';
import styled from 'styled-components';

const CVStyles = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 0 10rem 3rem 10rem;

  h2 {
    font-size: 1.125rem; /* 25% bigger for desktop/tablet */
    line-height: 1.625rem;
    padding: 0.5rem 0;
    text-wrap: balance;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;

    li {
      font-size: 1rem; /* 25% bigger for desktop/tablet */
      line-height: 1.375rem;
      padding: 0.2rem 0.8rem;
      text-wrap: balance;

      span {
        padding-right: 1rem;
      }

      ul {
        padding-left: 1rem;
      }
    }
  }

  @media (max-width: 1050px) {
    padding: 0 3rem 3rem 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 5rem 3rem 5rem;
  }

  @media (max-width: 640px) {
    padding: 0 2rem 2rem 2rem;
  }

  @media (max-width: 475px) {
    padding: 0 1rem 2rem 1rem;

    h2 {
      font-size: 0.99rem; /* 10% bigger on mobile */
      line-height: 1.43rem;
    }

    ul {
      li {
        font-size: 0.88rem; /* 10% bigger on mobile */
        line-height: 1.21rem;
        padding: 0.1rem 0.5rem;

        span {
          padding-right: 0.5rem;
        }

        ul {
          padding-left: 0.5rem;
        }
      }
    }
  }
`;

// Reusable section component
const Section = ({ children, ariaLabelledby }) => (
  <section aria-labelledby={ariaLabelledby}>
    {children}
  </section>
);

export default function CV() {
  return (
    <>
      <Head>
        <title>CV - Adam White</title>
        <meta
          name="description"
          content="Curriculum Vitae of Adam White - Artist, Musician, and Curator"
        />
      </Head>
      <CVStyles>
        <Section ariaLabelledby="education-heading">
          <h2 id="education-heading">EDUCATION</h2>
          <ul>
            <li>
              <span>1992</span> Bachelors of Fine Arts - Florida State University,
              Tallahassee, FL
            </li>
            <li>
              <span>2017</span> Masters of Fine Arts - Virginia Commonwealth
              University, Richmond, VA
            </li>
          </ul>
        </Section>
        <Section ariaLabelledby="residencies-heading">
          <h2 id="residencies-heading">RESIDENCIES & AWARDS</h2>
          <ul>
            <li>
              <span>2017</span> Dedalus Foundation Master of Fine Arts Fellowship
              in Painting and Sculpture
            </li>
            <li>
              <span>2017</span> Artist in Residence, Tempus Projects, Tampa, FL
            </li>
            <li>
              <span>2017</span> Artist in Residence, SOMA, Mexico City, Mexico
            </li>
            <li>
              <span>2016</span> C.B.F. Award for Community Building, Virginia
              Commonwealth University, MFA
            </li>
            <li>
              <span>2016</span> Artist in Residence, Mildred's Lane, Beach Lake,
              PA, VCU Fellow
            </li>
            <li>
              <span>2014</span> Artist in Residence, Wayfarers Gallery and Studio
              Program, NY
            </li>
          </ul>
        </Section>
        <Section ariaLabelledby="exhibitions-heading">
          <h2 id="exhibitions-heading">SELECTED EXHIBITIONS</h2>
          <ul>
            <li>
              <span>2024</span>
              <ul>
                <li>
                  Public Works Solo Commission, City Reliquary Museum, Brooklyn,
                  NY
                </li>
              </ul>
            </li>
            <li>
              <span>2023</span>
              <ul>
                <li>
                  Congress of Beauty Solo Exhibition, Gardenheir, Windham, NY
                </li>
              </ul>
            </li>
            <li>
              <span>2022</span>
              <ul>
                <li>
                  John Orth Solo Exhibition Curated by Serra Victoria Bothwell
                  Fels, Spring / Break, New York, NY
                </li>
              </ul>
            </li>
            <li>
              <span>2019</span>
              <ul>
                <li>
                  The Orangerie Solo Exhibition, Front Gallery, New Orleans, LA
                </li>
                <li>
                  Mediums Group Exhibition, Growroom // Showroom Gallery,
                  Brooklyn, NY
                </li>
              </ul>
            </li>
          <li>
            <span>2018</span>
            <ul>
              <li>
                Soft Film Group Exhibition, Catinca Tabacaru Gallery, New York,
                NY
              </li>
              <li>
                Florida, New York Group Exhibition, Gander Inc., New York, NY
              </li>
              <li>
                The Likes of Us Group Exhibition, Growroom // Showroom Gallery,
                Brooklyn, NY
              </li>
            </ul>
          </li>
          <li>
            <span>2017</span>
            <ul>
              <li>Dreamette Solo Exhibition, Tempus Gallery, Tampa, FL </li>
              <li>
                How to Avoid Trauma Group Exhibition, SOMA, Mexico City, Mexico
              </li>
              <li>
                Before the Foot Was Purple Group Exhibition, David & Schweitzer
                Contemporary, Brooklyn, NY
              </li>
            </ul>
          </li>
          <li>
            <span>2016</span>
            <ul>
              <li>
                A Flare Tossed into the Room Solo Exhibition, Protocol Gallery,
                Gainesville, FL
              </li>
              <li>Granfalloon Group Exhibition, FAB Gallery, Richmond, VA</li>
            </ul>
          </li>

          <li>
            <span>2015</span>
            <ul>
              <li>
                This Just In Group exhibition, Depot Gallery, Richmond, VA
              </li>
              <li>
                We Got Spirit Yes We Do Group exhibition, Unity Gallery,
                Fairfield, IA
              </li>
            </ul>
          </li>
          <li>
            <span>2014</span>
            <ul>
              <li>
                The Golden Age of Souvenirs Solo exhibition, Wayfarers Gallery,
                NY
              </li>
              <li>
                Decade of Decadunce Group exhibition, Cinders Gallery, South
                Street Seaport, NY
              </li>
            </ul>
          </li>
          <li>
            <span>2013</span>
            <ul>
              <li>
                The Joy of the Task Is Its Own Reward Inaugural group
                exhibition, Loveytown, Madison, WI
              </li>
              <li>
                Drawable Group exhibition curated by Rich Jacobs, F.L.A.
                Gallery, Gainesville, FL
              </li>
              <li>
                Mediating Drawing Group exhibition, St. Johns River State
                College, Palatka, FL
              </li>
              <li>Headscapes Group exhibition, Long Island City, Queens </li>
              <li>
                Dirty Fingers Traveling Group exhibition, F.L.A. Gallery,
                Gainesville, FL; See | Me Gallery, Long Island City, Queens;
                In:Surgo! Gallery, Berlin
              </li>
            </ul>
          </li>
          <li>
            <span>2012</span>
            <ul>
              <li>
                Elephants Weep Group exhibition curated by Wendy Babcox, F.L.A.,
                Gallery, Gainesville, FL
              </li>
              <li>
                Rewilding F.L.A. Inaugural three person exhibition, F.L.A.
                Gallery, Gainesville, FL
              </li>
            </ul>
          </li>
          <li>
            <span>2010</span>
            <ul>
              <li>Temple of Bloom Group Exhibition, Cinders Gallery, NY</li>
            </ul>
          </li>
          <li>
            <span>2009</span>
            <ul>
              <li>
                Forever Group exhibition, Subliminal Projects, Los Angeles, CA
              </li>
              <li>
                Channel District Satellites Collaboration with Alan Calpe,
                Channelside, Tampa, FL
              </li>
              <li>
                Carousel Invitational Slide Show Collaboration with Alan Calpe,
                Curated by Naomi Shersty, UM Milwaukee, Milwaukee, WI
              </li>
            </ul>
          </li>
          <li>
            <span>2008</span>
            <ul>
              <li>
                Harry Smith Anthology Remixed Group exhibition, CCA, Glasgow,
                Scotland
              </li>
              <li>
                Don’t Paint Your Teeth Group exhibition Curated by Rich Jacobs,
                Cinders Gallery, NY
              </li>
              <li>Cinders at Aqua Group exhibition, Miami, FL </li>
              <li>
                Cinders at Next Fair Group exhibition, Chicago, IL Unsung Two
                person show, Cinders Gallery, NY
              </li>
            </ul>
          </li>
          </ul>
        </Section>
        <Section ariaLabelledby="acquisitions-heading">
          <h2 id="acquisitions-heading">ACQUISITIONS</h2>
          <ul>
            <li>
              <span>2018</span> Beinecke Library, Yale University
            </li>
          </ul>
        </Section>
        <Section ariaLabelledby="curatorial-heading">
          <h2 id="curatorial-heading">CURATORIAL / DIRECTORIAL EXPERIENCE</h2>
          <ul>
            <li>
              <span>2014</span> Director, Curator F.L.A. Gallery, Gainesville,
              Florida
            </li>
            <li>
              <span>2013</span> Co-director, Co-curator F.L.A. Gallery,
              Gainesville, Florida
            </li>
            <li>
              <span>1997</span> Co-director, Founding Member, Cloud Seeding Circus
              of the Performative Object
            </li>
          </ul>
        </Section>
        <Section ariaLabelledby="recordings-heading">
          <h2 id="recordings-heading">RECORDINGS</h2>
          <ul>
            <li>
              <span>2013</span> Holopaw - Old Vs New EP/Through 'til the Morning,
              Misra Records
            </li>
            <li>
              <span>2013</span> Holopaw - Academy Songs Vol. 1., Misra Records
            </li>
            <li>
              <span>2009</span> Holopaw - Oh, Glory. Oh, Wilderness, Bakery Outlet
              Records
            </li>
            <li>
              <span>2005</span> Holopaw - Quit +/or Fight, Sub Pop Records
            </li>
            <li>
              <span>2003</span> Holopaw - S/T, Sub Pop Records
            </li>
            <li>
              <span>2002</span> Ugly Casanova - Sharpen Your Teeth (collaboration
              with Isaac Brock), Sub Pop Records
            </li>
          </ul>
        </Section>
        <Section ariaLabelledby="music-videos-heading">
          <h2 id="music-videos-heading">MUSIC VIDEOS</h2>
          <ul>
            <li>
              <span>2013</span> Holopaw - "Dirty Boots," costuming, styling,
              titling
            </li>
            <li>
              <span>2013</span> Holopaw - "The Lights From the Disco," Director
            </li>
            <li>
              <span>2005</span> Holopaw - "Curious," co-director with Alan Calpe
            </li>
          </ul>
        </Section>
      </CVStyles>
    </>
  );
}
