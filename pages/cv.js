import styled from "styled-components";

const CVStyles = styled.div`
  margin: 0 3rem;

  h2 {
    font-size: 0.9rem;
    line-height: 1.3rem;
    padding: 0.5rem 0;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;

    li {
      font-size: 0.8rem;
      line-height: 1.1rem;
      padding: 0.2rem 0.8rem;

      span {
        padding-right: 1rem;
      }

      ul {
        padding-left: 1rem;
      }
    }
  }
`;

export default function CV() {
  return (
    <CVStyles>
      <h2>EDUCATION</h2>
      <ul>
        <li>
          <span>1992</span> Bachelors of Fine Arts - Florida State University,
          Tallahassee, FL
        </li>
        <li>
          <span>2017</span> Masters of Fine Art - Virginia Commonwealth
          University, Richmond, VA
        </li>
      </ul>
      <h2>RESIDENCIES & AWARDS</h2>
      <ul>
        <li>
          <span>2017</span> Dedalus Foundation Master of Fine Arts Fellowship in
          Painting and Sculpture
        </li>
        <li>
          <span>2017</span> Tempus Projects Artist in Residence, Tampa, FL
        </li>
        <li>
          <span>2017</span> Artist in Residence, SOMA, Mexico City, Mexico
        </li>
        <li>
          <span>2016</span> C.B.F. Award for Community Building, Virginia
          Commonwealth University, MFA
        </li>
        <li>
          <span>2016</span> Artist in Residence, Mildred’s Lane, Beach Lake, PA,
          VCU Fellow
        </li>
        <li>
          <span>2014</span> Artist in Residence, Wayfarers Gallery and Studio
          Program, NY
        </li>
      </ul>
      <h2>SELECTED EXHIBITIONS</h2>
      <ul>
        <li>
          <span>2019</span>
          <ul>
            <li>
              The Orangerie Solo Exhibition, Front Gallery, New Orleans, LA
            </li>
            <li>
              Mediums Group Exhibition, Growroom // Showroom Gallery, Brooklyn,
              NY
            </li>
          </ul>
        </li>
        <li>
          <span>2018</span>
          <ul>
            <li>
              Soft Film Group Exhibition, Catinca Tabacaru Gallery, New York, NY
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
            <li>This Just In Group exhibition, Depot Gallery, Richmond, VA</li>
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
              The Golden Age of Souvenirs Solo exhibition, Wayfarers Gallery, NY
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
              The Joy of the Task Is Its Own Reward Inaugural group exhibition,
              Loveytown, Madison, WI
            </li>
            <li>
              Drawable Group exhibition curated by Rich Jacobs, F.L.A. Gallery,
              Gainesville, FL
            </li>
            <li>
              Mediating Drawing Group exhibition, St. Johns River State College,
              Palatka, FL
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
      <h2>ACQUISITIONS</h2>
      <ul>
        <li>
          <span>2018</span> Beinecke Library, Yale University
        </li>
        <h2>CURATORIAL / DIRECTORIAL EXPERIENCE</h2>
        <li>
          <span>2014</span> Director, Curator F.L.A. Gallery, Gainesville,
          Florida
        </li>
        <li>
          <span>2013</span> Co-director, Co-curator F.L.A. Gallery, Gainesville,
          Florida
        </li>
        <li>
          <span>1997</span> Co-director, Founding Member, Cloud Seeding Circus
          of the Performative Object
        </li>
        <h2>RECORDINGS</h2>
        <li>
          <span>2013</span> Holopaw - Old Vs New EP/Through ‘til the Morning,
          Misra Records
        </li>
        <li>
          <span>2013</span> Holopaw - Academy Songs Vol. 1., Misra Records
        </li>
        <li>
          <span>2009</span> Holopaw - Oh, Glory. Oh, Wilderness, Bakery Outlet
          Records{" "}
        </li>
        <li>
          <span>2005</span> Holopaw - Quit +/or Fight, Sub Pop Records
        </li>
        <li>
          <span>2003</span> Holopaw - S/T, Sub Pop Records
        </li>
        <li>
          <span>2002</span> Ugly Casanova – Sharpen Your Teeth (collaboration
          with Isaac Brock), Sub Pop Records
        </li>
      </ul>
      <h2>MUSIC VIDEOS</h2>
      <ul>
        <li>
          <span>2013</span> Holopaw – “Dirty Boots,” costuming, styling, titling
        </li>
        <li>
          <span>2013</span> Holopaw - “The Lights From the Disco,” Director
        </li>
        <li>
          <span>2005</span> Holopaw - “Curious,” co-director with Alan Calpe
        </li>
      </ul>
    </CVStyles>
  );
}
