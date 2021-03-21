import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Expand from "../../components/Expand"

const CulturesPage = () => {
  return (
    <Layout>
      <SEO title="Niyalan Cultures" />
      <section>
        <article>
          <h1>Niyalan Cultural Types</h1>
          <p>
            Niyala has cultures too numerous to list here, and no species nor
            region is defined by a singular cultural style or theme. However,
            some cultures have become somewhat dominant or prevalent enough to
            give a general idea of what someone can often expect.
          </p>
          <p>
            Cultures here are separated into four rough groups.{" "}
            <b>Species Cultures</b>{" "}
            are the results of how a given species has developed in line with its own
            psychology and species history. <b>Religious Cultures</b> are,
            unsurprisingly, the various major religions and their resulting
            cultural forms. <b>Localised Cultures</b> are those that often occur
            at the intersections of other cultural types, such as inter-species,
            inter-religious, or simply through regional histories.
          </p>
          <p>
            Lastly, <b>Specific Cultures</b> are those that have been defined in
            detail, either due to campaign or world relevance.
          </p>
          <p>
            At the sole exception of Specific Cultures, <b>none</b> of these
            cultures are universal or consistent - indications of some of their
            most known subcultures and counter-cultures are presented, but all
            generic cultures should be taken as a rough idea for tropes that
            might be found, and their origins, especially accounting for the
            fact the setting changes over time.
          </p>
        </article>
      </section>
      <section>
        <h2>Species Cultures</h2>
        <article>
          <h3>Huvarin</h3>
          <p>"Adapt. Excel."</p>
          <p>
            Blessed with their innate abilities to not only evade danger, but
            negate its risks - the Huvarin have done well to survive in a world
            as the biological underdog. Coming from the most difficult of
            regions to survive in, the merciless jungles, and forever caught
            between the nations and struggles of more advantaged creatures has
            taught Huvarin the value of taking risks, rewarding success, and
            adjusting to always make the best of every situation.
          </p>
          <p>
            Most Huvarin societies are inclusive by nature, welcoming other
            cultures with open arms, a learned habit from their versatile nature
            and a history of knowing enemies are dangerous, and allies are
            companions. However, individuals are often valued more than their
            collective communities; Heroes are worshipped and admired,
            celebrities are common, and an at times unhealthy respect to the
            successful results in regular class divisions and mutation of
            cultures to suit the desires of the few.
          </p>
          <div>
            <h4>Subcultures</h4>
            <p>
              Huvarin societies are regularly mutated by exposure to other
              cultures and their environments, a side effect of their success
              and survival oriented adaptation. It's not uncommon for some 
              once Huvarin-centric cultures to be entirely altered to resemble 
              another due to increasing influences or required change.
            </p>
            <h4>Counter-Cultures</h4>
            <p>
              With Huvarin culture being so diverse, counter-cultures are 
              difficult to define, but extremely common in smaller communities; 
              their own culture strongly encourages that the best ideas, practices, 
              and solutions should rise - even against the resistance of the status quo.
            </p>
          </div>
        </article>
        <article>
          <h3>Taki-Ori</h3>
          <p>"For the good of all."</p>
          <p>
            Taki-Ori societies have been built upon a background of understanding 
            the environment they're in, and those around them with empathy and 
            selflessness; they succeed together, making up for their individual 
            weakness with their immense ability in numbers and combined strength.
            Taki-Ori have survived not by out-fighting or expanding, but by adopting 
            the thought of perseverence not only for themselves, but the world around 
            them. They've never struggled for resources for long, and have often 
            used the world around them to their advantage.
          </p>
          <p>
            From such communal beginnings, it's common that many Taki-Ori cultures 
            abhor the typical mores of status and wealth - their stronger sense of 
            empathy and reduced needs does well to ensure that most individual 
            members are comfortable contributing for the sake of an entire community.
          </p>
          <p>
            Originating from a need to prevent over-harvesting or over-hunting an area,
            Taki-Ori communities are often mobile and fluid - covering large areas of 
            terrain with bases that can be easily relocated. This soon adjusted to a 
            behaviour for individuals, as Taki-Ori routinely change communities based 
            on their needs, and rapidly form bonds with their new companions.
          </p>
          <div>
            <h4>Subcultures</h4>
            <p>
              The roving nature of their smaller communities lends to each often 
              having a given focal point and guiding force between when and where 
              they relocate, and how they direct their resources. Many are lead by 
              shamans, putting trust in spirits for guidance - but others are led by 
              the needs of their own people. 
            </p>
          </div>
        </article>
      </section>
      <section>
        <h2>Specific Cultures & Societies</h2>
        <article>
          <h3>Dranend Nomads (TL9 / Cyberpunk Campaign)</h3>
          <p>
            Culturally decended from various Taki-Ori societies, the wandering 
            practices of the Nomads are often considered unusual to most people.
            They live outside of cities, forming instead small communities that 
            are rarely larger than 250 adults, and maintain a constantly travelling 
            nature of setting up camps in an area, harvesting or surviving as long 
            as their desires dictate, before moving on.
          </p>
          <p>
            These communities can have vastly different species distributions, even 
            if the practice hails back to traditional Taki-Ori caravans; and in turn, 
            their own cultural dynamics. Some follow traditional Taki-Ori practices of 
            frequent movement to prevent over-harvesting an area, while others are less
            concerned and will remain until their own needs are no longer fulfilled.
            Their lives are ones of immense freedom, unburdened by the cities and their 
            rules and doctrine - but dangerous, as they instead subject themselves to the 
            mercy of the elements, the wandering monsters of the badlands, and sometimes 
            even other less peaceful Nomadic communities.
          </p>
        </article>
      </section>
    </Layout>
  )
}

export default CulturesPage
