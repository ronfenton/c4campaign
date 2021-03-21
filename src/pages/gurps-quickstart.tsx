import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { InfoBox, InfoContainer } from "../components/Info"
import Expand from "../components/Expand"

const GurpsQuickstart = () => (
  <Layout>
    <SEO title="Home" />
    <h1>GURPS Quick Start</h1>
    <p>Megastructure C4 Campaign</p>
    <p>
      Below are some quick rules / mechanics for the Megastructure C4 Campaign;
      this page has bookmarks so you can skip to a relevant section! Almost all
      of these rules have more detailed rules the GM will happily walk you
      through – but this should give an idea of the barebones of how things
      work!
    </p>
    <p>
      This page has some informational popouts included - many segments will
      have a few bits of extra information if it might be of use! Examples (<i className="bi-play"/>)
      are used to show you these rules or mechanics in play and help understand
      their basic principles. Further Information (<i className="bi-info"/>) gives more detailed info
      about what's in the document, such as additional options or just some help
      understanding the nitty-gritty details. Lastly, GM Notes (<i className="bi-chat"/>) are notes
      from me, GM Dingo, to help explain from a GM perspective why we're doing
      certain things a certain way, or why we're using a given rule; a way to
      see into the GM's mind and understand where he's coming from.
    </p>
    <section>
      <h2>Everyone</h2>
      <article>
        <h3>Success Rolls</h3>
        <p>
          Roll three six-sided die (or just 3d, in typical GURPS nomenclature);
          if your number is below or equal to a target number, usually a skill
          or attribute, you succeed. Any modifiers are applied to the target
          number, not the dice; so if you need to roll against 12 and have a +2
          bonus, you roll against 14, you don’t roll 3d+2.
        </p>
        <p>
          Due to the resulting bell-curve, most rolls will be between 8 and 12.
          You can see below a simple table showing your chance to succeed based
          on the number. A 3 or 4 is always a success, and 17 or 18 is always a
          failure.
        </p>
        <table className="justify-first">
          <thead>
            <tr>
              <th>Target</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>10</th>
              <th>11</th>
              <th>12</th>
              <th>13</th>
              <th>14</th>
              <th>15</th>
              <th>16</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Chance</th>
              <td>0.5%</td>
              <td>2%</td>
              <td>5%</td>
              <td>9%</td>
              <td>16%</td>
              <td>26%</td>
              <td>38%</td>
              <td>50%</td>
              <td>63%</td>
              <td>74%</td>
              <td>84%</td>
              <td>91%</td>
              <td>95%</td>
              <td>98%</td>
            </tr>
          </tbody>
        </table>
        <p>
          Sometimes Margin of Success or Failure matters; Rolling 10 vs skill 14
          means you have succeeded with a margin of success of 4. This
          particularly matters in the case of Contests - where if both parties
          succeed, the margin defines the winner.
        </p>
        <InfoContainer>
          <InfoBox category="example" title="A First Roll" stepped={true}>
            <p>
              Andy has been asked to make a roll against his Health (HT), which
              happens to be 12. As with all rolls for success or failure, Andy
              will first wish to roll three six-sided die.
            </p>
            <p>Andy's die show a 3, 6, and 2 for a total of 11.</p>
            <p>
              As Andy's target number, 12, is higher than the total of his roll
              - he has succeeded on this test. When reporting this to the game
              master, he'll likely want to say that he 'succeeded by 1'.
            </p>
          </InfoBox>
          <InfoBox category="example" title="Penalised Roll" stepped={true}>
            <p>
              Remy has to perform a great feat of dexterity - but unfortunately,
              she's in quite a bit of pain right now and it's penalising her
              actions.
            </p>
            <p>
              Remy's Dexterity is 11, but the GM has indicated she's taking a -2
              because of the pain.
            </p>
            <p>Remy rolls and gets 6, 2, and 3 for a total of 11.</p>
            <p>
              While Remy's roll is equal to her Dexterity, and thus she would
              usually have succeeded. Due to the penalty, however, she's
              actually rolling against 9 (11-2). As a result, she failed by 2.
            </p>
          </InfoBox>
          <InfoBox category="example" title="A Contest" stepped={true}>
            <p>
              Jake and Samson have decided to engage in the oldest of games; a
              staring contest. The GM decides this makes the most sense to be a
              contest of sheer will - so he asks both players to make a roll
              against Willpower.
            </p>
            <p>
              Jake has a Willpower of 10, while Samson has a Willpower of 11.
              They make their rolls.
            </p>
            <table className="justify-first">
              <thead>
                <tr>
                  <th></th>
                  <th>Jake</th>
                  <th>Samson</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Roll:</th>
                  <td>[1 4 3] = 8</td>
                  <td>[5 2 3] = 10</td>
                </tr>
                <tr>
                  <th>Success?</th>
                  <td>Success by 2 (10-8)</td>
                  <td>Success by 1 (11-10)</td>
                </tr>
              </tbody>
            </table>
            <p>
              It appears Samson won this contest! It's a close battle; but Jake
              got lucky.
            </p>
          </InfoBox>
          <InfoBox category="info" title="Why Not d20+x?">
            <p>
              At a glance, 3d6 gives a narrower range of options than 1d20 does,
              and it involves a bit of extra counting and a new way of thinking
              for most players - we're rolling under, not over, and we're
              manipulating our target instead of our own roll. These all feel
              very unusual to some TTRPG players, especially those from d20 whom
              are used to 'here's the DC / AC, roll 1d20 + mods and beat it'. So
              let's cover why.
            </p>
            <p>
              <b>Roll Under:</b> This one is the easiest. We roll under because
              usually we are rolling against our character's own <i>skill</i> or{" "}
              <i>attribute</i>, and we intuitively want these to be high. The
              higher they are, the higher the target; which means rolling{" "}
              <i>less</i> becomes easier!
            </p>
            <p>
              <b>3d6 vs 1d20:</b> This is largely to change the distribution of
              results. With a d20, you are just as likely to get a Natural 1 or
              Natural 20 - the extremes of the scale - as you are to get dead
              average 10 or 11. With 3d6, the 'extreme' results truly become
              rare; going from 5% (1:20) to 0.46% (1:216). This also helps us
              model reality a bit - averages should make up the bulk.
            </p>
            <p>
              <b>Modding Target instead of Dice:</b> This honestly could be done
              any way, and is just the way GURPS has chosen to do it. The
              biggest part is to ensure that only one part of the mechanic is
              variable - the target! You will always roll 3d6 and add them
              together and hope to get under your target, without ever having to
              modify that 3d6. The other, is because it helps us keep track of
              our chances; with how the distribution of results works, we can
              easily identify that if we get our skill above 12 our chances are
              great, and below 8, horrible. If we adjusted the dice instead -
              imagine trying to work out your chance of success against Target
              14 when rolling 3d6+4 and trying to work out where the new
              'middle' spot is!
            </p>
          </InfoBox>
        </InfoContainer>
      </article>
      <article>
        <h3>Attributes</h3>
        <p>
          Every character has a number of attributes that indicate their
          physical, mental, and social characteristics. Rolls against attributes
          on their own are generally quite rare, however in any case where skill
          and experience pale in comparison to a character's natural ability,
          attributes come into play.
        </p>
        <InfoContainer>
          <InfoBox category="info" title="The Attributes">
            <p>
              There are quite a few attributes, each covering a different part
              of your character. These are..
            </p>
            <p>
              <b>Basic Attributes</b> - Overall representation of your
              character's intristic ability! Skills tend to be based on these
              only, but exceptions do exist.
              <ul>
                <li>
                  <i>Strength (ST):</i> Physical power and mass.
                </li>
                <li>
                  <i>Dexterity (DX):</i> Mobility and finesse.
                </li>
                <li>
                  <i>Intelligence (IQ):</i> Cognitive ability.
                </li>
                <li>
                  <i>Health (HT):</i> Physiological wellbeing and fitness.
                </li>
                <li>
                  <i>Charisma (CH):</i> Social ability and insight.
                </li>
                <li>
                  <i>Perception (PER):</i> Perceptive ability
                </li>
                <li>
                  <i>Willpower (WIL):</i> Cognitive and psychological endurance.
                </li>
                <li>
                  <i>Neural Interfacing (NI):</i> Natural compatibility with
                  neural technology.
                </li>
              </ul>
            </p>
            <p>
              <b>Secondary Characteristics</b> - other attributes of the
              character.
              <ul>
                <li>
                  <i>Basic Lift (BL):</i> Lifting capacity - based on Strength.
                </li>
                <li>
                  <i>Basic Speed (BS):</i> Reaction speed - based on Dexterity
                  and Health.
                </li>
                <li>
                  <i>Basic Move (BM):</i> Movement speed - based on Basic Speed.
                </li>
                <li>
                  <i>Wound Resistance (WR):</i> Ability to resist trauma - based
                  on Health.
                </li>
                <li>
                  <i>Fatigue Points (FP):</i> Maximum fatigue points - based on
                  Health.
                </li>
              </ul>
            </p>
          </InfoBox>
        </InfoContainer>
      </article>
      <article>
        <h3>Skills</h3>
        <p>
          Characters have skills that they use to perform most actions. Skills
          are based on attributes, and as such have what’s called a ‘relative
          level’, which tells you how much higher or lower than the attribute
          your skill is. For example, your Knife skill may be at DX+1 – this
          means your skill is equal to your Dexterity (DX) +1, and if your DX
          was 10, your skill would be 11! It is written like this, as all skills
          encompass everything about it – and sometimes you might need to use a
          different attribute momentarily. Skills are usually listed with their
          ‘usual’ skill level for easier reference.
        </p>
        <InfoContainer>
          <InfoBox category="example" title="Basic Skill" stepped={true}>
            <p>
              Bob has the skill Tactics that he knows at IQ+1. His IQ is 11; so
              we record this on his sheet as Tactics (IQ+1)-12.
            </p>
            <p>
              When asked to roll against Tactics, he'll roll 3D and hope to roll
              12 or less.
            </p>
            <p>Bob rolls a 3, 2, and 2 totalling 7.</p>
            <p>
              Bob has succeeded by 5, the difference between his roll of 7 and
              his skill of 12, on his Tactics roll.
            </p>
          </InfoBox>
        </InfoContainer>
        <h4>Defaults</h4>
        <p>
          Lots of skills have overlaps. If you don’t have a given skill –
          sometimes you can roll another skill at a penalty, or even just
          improvise using an attribute at a heavy penalty. Almost all skills
          have a list of other skills that it can default to at a penalty, and
          even then if ever it makes sense another skill can be used, it can
          always be suggested as an option.
        </p>
      </article>
    </section>
    <section>
      <h2>Combat Basics</h2>
      <article>
        <h3>Combat Sequence</h3>
        <p>
          Each actor in combat takes a single Manoeuvre, in order of highest
          Basic Speed to lowest. Each different manoeuvre allows you to perform
          a different action, and has implications for how much movement you can
          make and how your defences are modified until your next turn.
        </p>
        <p>
          There are additional manoeuvres and variations than those below, and
          *indicates this may be better / have bonuses depending on choices.
          These are just the main 6 options.
        </p>
        <table>
          <thead>
            <tr>
              <th>Maneouvre</th>
              <th>Action</th>
              <th>Movement</th>
              <th>Defense</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Attack</td>
              <td>Perform an attack</td>
              <td>One Step</td>
              <td>Normal</td>
            </tr>
            <tr>
              <td>Move</td>
              <td>Move</td>
              <td>Basic Move in Metres</td>
              <td>Normal</td>
            </tr>
            <tr>
              <td>Ready</td>
              <td>Perform a physical action</td>
              <td>One Step</td>
              <td>Normal</td>
            </tr>
            <tr>
              <td>Concentrate</td>
              <td>Perform a mental action</td>
              <td>One Step</td>
              <td>Normal</td>
            </tr>
            <tr>
              <td>All-Out Attack</td>
              <td>Perform attack with a choice of bonus</td>
              <td>1/2 Basic Move in Meters</td>
              <td>None until Next Turn</td>
            </tr>
            <tr>
              <td>All-Out Defense</td>
              <td>None</td>
              <td>1/2 Basic Move in Meters</td>
              <td>Normal with bonuses</td>
            </tr>
          </tbody>
        </table>
      </article>
      <article>
        <h3>Moving</h3>
        <p>
          Every turn you can move a certain distance. Every character has a
          Basic Move attribute – this is an indication of how far you can move
          at a run. A ‘step’ is a special move that lets you move one space.
        </p>
      </article>
      <article>
        <h3>Attacking</h3>
        <p>
          Attempt to hit your target by using your weapon’s Skill, with any
          modifiers, such as penalties for being wounded, range, etc. If you
          succeed; you have potentially hit your opponent. They still get to
          defend.
        </p>
        <p>
          If using a weapon that has a Rate of Fire (RoF), you might hit more
          than once if you succeed well. All weapons with an RoF also have a
          Recoil (Rcl); for each multiple of Rcl you succeed by, you get an
          extra possible hit.
        </p>
        <InfoContainer>
          <InfoBox
            category="example"
            title="Simple; A Normal Strike"
            stepped={true}
          >
            <p>
              Dana with her club attempts to strike at a Bogvari Warrior 
              that dared get in her way. Her club indicates she can use her 
              Melee [Broadsword] skill to strike, which thankfully happens to 
              be 12!
            </p>
            <p>Dana rolls 3d, and scores a 5, 1, and 3 for a total of 9.</p>
            <p>
              As 9 is less than her target of 12 - the club is swung on-target.
            </p>
            <p>
              Now it's time for the Bogvari Warrior to defend himself...
            </p>
          </InfoBox>
          <InfoBox
            category="example"
            title="Advanced; A Difficult Shot"
            stepped={true}
          >
            <p>
              Bob with his Rifle (Skill 16, RoF 3, Rcl 2) is attempting to 
              take a shot at Jane - there's some distance, though, so 
              his shot takes a penalty for range of -4.
            </p>
            <p>He gets 1 hit for rolling less than 15 as normal.</p>
            <p>
              He also gets two additional hits for his large margin of success;
              two multiples of his Rcl fit in his margin of 5; 2 and 4!
            </p>
            <p>
              Jane has three bullets on-target and rushing towards her! See the
              example in Defending to see how it turns out!
            </p>
          </InfoBox>
          <InfoBox
            category="example"
            title="Complex; A Shooting"
            stepped={true}
          >
            <p>
              Stuff Here.
            </p>
          </InfoBox>
        </InfoContainer>
      </article>
      <article>
        <h3>Defending</h3>
        <p>
          If an attack is about to hit you, you can roll one of your defences.
          All characters have a Dodge defence, and almost all melee weapons
          (including unarmed) can be used to Parry, and some characters might
          use shields to Block.
        </p>
        <p>
          If you succeed on your defence; the attack is negated. If the attack
          has multiple potential hits, such as from a weapon with a Rate of
          Fire, each margin of success negates an additional hit.
        </p>
        <InfoContainer>
          <InfoBox
            category="example"
            title="A Shooting by Bob (Pt 2)"
            stepped={true}
          >
            <p>Jane (Dodge 9) attempts to avoid being shot by Bob’s 3 hits!</p>
            <p>
              She rolls 8 on her dodge; she evades one shot just for succeeding,
              and another for her MoS of 1.
            </p>
            <p>
              The third hit still hits her! This could be bad; see the example
              in Damage to see how Jane fares.
            </p>
          </InfoBox>
        </InfoContainer>
      </article>
      <article>
        <h3>Damage</h3>
        <p>
          Damage is straightforward; every weapon will indicate how much damage
          it does, and its type. This typically is read like <b>#d+# [type]</b>,
          such as <b>1d+1 cut</b>. When you successfully hit a person, you roll
          your damage, and subtract their armour's Damage Resistance (DR);
          anything that's left over, becomes penetrating damage and is used for
          injury!
        </p>
        <p>
          Some armours do have higher or lower resistances against certain
          damage types; a stab-proof vest is great against knives, but is so
          soft and flexible it's not going to help much about the raw, blunt
          trauma of a baseball bat! A
        </p>
        <p>
          Also remember - armour doesn't cover everything; if someone's wearing
          a vest, shoot them in the arm, they won't get any armour at all to
          save them.
        </p>
      </article>
      <InfoContainer>
        <InfoBox
          category="example"
          title="A Shooting by Bob (Pt 3)"
          stepped={true}
        >
          <p>
            Jane has been hit by one of Bob's rifle bullets, ow! Bob's weapon
            deals <b>4d+2 pi</b> - pi means Piercing.
          </p>
          <p>Bob rolls his damage, rolling (1,4,5,3)+2 = 13!</p>
          <p>
            Fortunately, Jane is wearing a concealed vest, which happens to have
            a DR of 8. This reduces the damage to 5.
          </p>
          <p>
            This could hurt.. Let's hope she survives in the Injury section.
          </p>
        </InfoBox>
        <InfoBox category="info" title="Damage Types">
          <p>
            GURPS has a number of damage types, that are used to indicate the
            <i>type</i> of wound they cause, and how they interact with objects.
            This can also help with identifying what armours are good against
            them. Damage types also affect the survivability of injury, so it is
            good to keep these in mind.
          </p>
          <p>
            Quick Tip: Some weapons have very high damage, but cause small
            injuries because of their type (such as small-piercing); while
            others have low damage, but cause might large injuries (such as
            impalements).
          </p>
          <ul>
            <li>
              <b>Piercing (pi):</b> Narrow, fast, sharp penetrations. Eg;
              bullets & darts.{" "}
              <ul>
                <li>
                  <i>
                    Piercing has four size-based variants: Small Piercing (pi-),
                    Piercing (pi), Large Piercing (pi+), and Huge Piercing
                    (pi++).
                  </i>
                </li>
              </ul>
            </li>
            <li>
              <b>Crushing (cr):</b> All forms of blunt or crush trauma. Eg;
              fists & bats.
            </li>
            <li>
              <b>Cutting (cut):</b> All slicing, chopping, or cutting. Eg; sword{" "}
              <i>swings</i> & axes.
            </li>
            <li>
              <b>Impaling (imp):</b> Any form of impalement or large penetrating
              wound. Eg; sword <i>stabs</i> & spears.
            </li>
            <li>
              <b>Burning (brn):</b> All types of burning, scalding or
              energy-based damage. Eg; fire, electricity & frostbite!
            </li>
            <li>
              <b>Corrosion (cor):</b> Any form of physical disintegration or
              ablation. Eg; acid & disintegration rays
            </li>
            <li>
              <b>Toxic (tox):</b> Any damage that works by causing cellular
              damage. Eg; poison & radiation.
            </li>
          </ul>
          <p>
            Damage types that modify survivability do so as follows (some hit
            locations adjust this; cuts to the neck are <b>bad</b>; being
            impaled through your hand.. not so much);
            <ul>
              <li>
                <b>+1:</b> Small Piercing (pi-)
              </li>
              <li>
                <b>-1:</b> Cutting (cut), Large Piercing (pi+)
              </li>
              <li>
                <b>-2:</b> Impaling (imp), Huge Piercing (pi++)
              </li>
            </ul>
          </p>
        </InfoBox>
      </InfoContainer>
      <article>
        <h3>Injury</h3>
        <p>
          Each character can sustain quite a bit of injury. The more durable a
          character is, the worse injuries they can survive.
        </p>
        <p>
          Look up the penetrating damage on your character’s resistance table to
          work out how survivable it is. Survivability is a measure of how 'ok'
          the character is; higher numbers are better! Part of the resistance
          table for a completely average human is shown below.
        </p>
        <table>
          <thead>
            <tr>
              <th>Penetrating Damage</th>
              <th>Default Survivability</th>
              <th>Condition</th>
              <th>Shock</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3</td>
              <td>+3</td>
              <td>Minor Wound</td>
              <td>-3</td>
            </tr>
            <tr>
              <td>4 - 6</td>
              <td>+2</td>
              <td>Major Wound</td>
              <td>-4</td>
            </tr>
            <tr>
              <td>7 - 8</td>
              <td>+1</td>
              <td>Reeling</td>
              <td>-4</td>
            </tr>
            <tr>
              <td>9 - 12</td>
              <td>0</td>
              <td>Crippled</td>
              <td>-4</td>
            </tr>
            <tr>
              <td>13 - 18</td>
              <td>-1</td>
              <td>Crippled</td>
              <td>-4</td>
            </tr>
          </tbody>
        </table>
        <p>
          This means this person can take 3 injury, and it will mean they are
          minorly wounded (recorded as Survivability +3). In GURPS using this
          system, injuries don’t stack up – no death by cat-scratches! Some
          factors can adjust this survivability up and down after determining it
          based on damage; such as hit location or damage type. Skull injuries
          get -4 Survivability, so even 3 damage to the skull would be
          crippling!
        </p>
        <p>
          If you take another injury of a worse survivability – that replaces
          the old injury as far as effects are concerned. If you take an injury
          that’s equal or less survivability; your existing injury might worsen
          if you fail a Wound Resistance roll with a bonus equal to
          survivability of the new wound.
        </p>
        <p>
          Shock is simply a penalty you take to actions on your next turn as a
          result of the pain – though characters with High Pain Tolerance can
          ignore this.
        </p>
        <InfoContainer>
          <InfoBox
            category="example"
            title="A Shooting by Bob (Pt 4)"
            stepped={true}
          >
            <p>
              Jane's not only been shot at by Bob - but actually hit, with one
              round penetrating her armour to deal 5 Penetrating Damage!
            </p>
            <p>
              Jane isn't particularly strong or weak, so she uses the same
              Resistance Table used above. She looks up her penetrating damage
              on the table.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Penetrating Damage</th>
                  <th>Default Survivability</th>
                  <th>Condition</th>
                  <th>Shock</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>4 - 6</td>
                  <td>+2</td>
                  <td>Major Wound</td>
                  <td>-4</td>
                </tr>
              </tbody>
            </table>
            <p>
              This is definitely going to hurt. It's a Major Wound, which means
              a few things for poor Jane. Firstly - she's going to suffer Shock!
              This gives her -4 to her DX and IQ for the next turn - she's
              probably going to want to take cover until she gets her wits back.
              Secondly, Major Wounds can knock someone out instantly - she'll
              have to roll against her Wound Resistance to stay conscious.
            </p>
            <p>
              Once she's determined if she's conscious, and made a mental note
              of her Shock for next turn - she quickly compares her new wound's
              survivability (+2) to her existing wounds. Earlier in the day she
              did get a nasty punch in the jaw that was Survivability +4;
              suffice, she's not thinking about that punch anymore, and simply
              notes that she is now at Survivability +2, overwriting the old,
              less significant wound entirely.
            </p>
          </InfoBox>
          <InfoBox category="example" title="Full Resistance Table">
            <table>
              <thead>
                <tr>
                  <th>Penetrating Damage</th>
                  <th>Default Survivability</th>
                  <th>Condition</th>
                  <th>Shock</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>+6</td>
                  <td>Scratch</td>
                  <td>-3</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>+5</td>
                  <td>Minor Wound</td>
                  <td>-3</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>+4</td>
                  <td>Minor Wound</td>
                  <td>-3</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>+3</td>
                  <td>Minor Wound</td>
                  <td>-3</td>
                </tr>
                <tr>
                  <td>4 - 6</td>
                  <td>+2</td>
                  <td>Major Wound</td>
                  <td>-4</td>
                </tr>
                <tr>
                  <td>7 - 8</td>
                  <td>+1</td>
                  <td>Reeling</td>
                  <td>-4</td>
                </tr>
                <tr>
                  <td>9 - 12</td>
                  <td>0</td>
                  <td>Crippled</td>
                  <td>-4</td>
                </tr>
                <tr>
                  <td>13 - 18</td>
                  <td>-1</td>
                  <td>Crippled</td>
                  <td>-4</td>
                </tr>
                <tr>
                  <td>19 - 24</td>
                  <td>-2</td>
                  <td>Mortal Wound</td>
                  <td>-4</td>
                </tr>
                <tr>
                  <td>25 - 36</td>
                  <td>-3</td>
                  <td>Mortal Wound</td>
                  <td>-4</td>
                </tr>
                <tr>
                  <td>37-60</td>
                  <td>-4</td>
                  <td>Instantly Fatal</td>
                  <td>-4</td>
                </tr>
                <tr>
                  <td>61-84</td>
                  <td>-5</td>
                  <td>Instantly Fatal</td>
                  <td>-4</td>
                </tr>
                <tr>
                  <td>85+</td>
                  <td>-6</td>
                  <td>Total Destruction</td>
                  <td>-4</td>
                </tr>
              </tbody>
            </table>
          </InfoBox>
          <InfoBox category="gmnote" title="Why So Complicated?">
            <p>
              There is no denying it - this system, known within the GURPS
              tabletop roleplaying community as{" "}
              <b>
                <i>Conditional Injury</i>
              </b>
              , is complicated. There's a table check, looking at your own stat,
              there's even having to do some additional rolling in certain
              circumstances. Most GURPS campaigns use a HP system as you see in
              most TTRPGs as well, so even moreso;{" "}
              <i>"Why, Dingo: Why are we using this?!"</i>
            </p>
            <p>
              Honestly, whether this is used in the long term or not is up in
              air to see how well our table can handle it. If it does slow
              things too much, this is one rule I'll happily bend on, though I
              would like to at least give it a try.
            </p>
            <p>
              That of course does not answer why. The why, is because for the
              campaign we're going to run, it suits the narrative better. With a
              HP system, the lower your HP gets, the more dangerous previously
              harmless injuries are. Assume you have 20 HP, bad things happen if
              it reaches 0, and you die if it hits -10: When you're at 20 HP,
              you don't care if someone punches you for 3 damage - it's just a
              punch afterall, so why would you care? But if your HP is at 2, or
              even in negatives, suddenly this weak punch is life-threatening.
              The danger for the character increases, despite the actual
              attack's potential remaining unchanged.
            </p>
            <p>
              With conditional injury - this doesn't matter. A punch has a very
              low chance of making your injuries worse, and even if it did -
              it'd increase your wound level by one step, not further. This is
              important, because in this campaign you may sometimes - perhaps
              even regularly - have to go into battle with existing wounds; and
              there's some safety in knowing that something is always dangerous
              to the same degree.
            </p>
            <p>
              This does make characters, overall, far more durable - with a HP
              system, you can always be whittled down, no matter how slowly, you
              will be guaranteed to eventually run out of HP. With Conditional
              Injury, if you get lucky on your health rolls, you could survive
              five hundred gunshots (though let's be honest, if you're that
              lucky, get a lottery ticket please). This means player characters
              can survive more - but so can enemies. This is why the 'statuses'
              hurt so much - to ensure that, hey, you survived that hit but{" "}
              <b>you should probably get out of that fight now</b>; NPCs
              generally will lose their will to fight long before they die.
            </p>
          </InfoBox>
          <InfoBox category="gmnote" title="Isn't it meant to be Severity?">
            <p>
              If you've used Conditional Injury before, by some crazy stroke of
              luck given where I'm recruiting players from; chances are you
              noticed that I'm using 'Survivability' instead of 'Severity', and
              starting at +7 down to -7, instead of the other way around. Why?
            </p>
            <p>
              Because the players I showed it to just found it easier to dijest,
              and allowed you to skip the 'invert the mod' for bonuses. This only
              works, of course, because I'm providing to each player a pre-calculated 
              resistance table, so the need for the original scale to work with 
              Wound Potential - Resilience is no longer needed.
            </p>
          </InfoBox>
        </InfoContainer>
      </article>
      <article>
        <h3>Damage to Objects</h3>
        <p>
          Any active-combat objects that deserve the complexity like cars and
          drones use the Injury rules above – ensuring you can’t poke a tank to
          death. Any other object, however, will simply have a DR and some hit
          points – penetrating damage lowers hit points, and if it hits 0, the
          object is damaged beyond use; much lower than that, damaged beyond
          repair!
        </p>
      </article>
    </section>
    <section>
      <h2>Social Basics</h2>
      <InfoContainer>
        <InfoBox category="gmnote" title="The GM's Approach">
          <p>
            No rule system could hope to truly, fully codify social interaction,
            personality and individual reason into easy to dijest and use rules
            rules. Thus, these rules exist to cover cases where there's general
            conflict, significant outcomes for failure or success, or to help
            players understand how I'm going about it in the back of my mind.
          </p>
        </InfoBox>
      </InfoContainer>
      <article>
        <h3>Appearance</h3>
        <p>
          Character appearance is important. The equipment you wear, and any
          disadvantages or augmentation will affect the starting perception of
          any character towards your own.
        </p>
        <p>
          Most equipment will have a one or two tags that helps indicate what
          type of appearance this item has - players are not expected to keep
          track of specific outfit details, however being aware of roughly what
          styles you are showing is important. There are understandable
          overlaps, so these are not hard and fast, and instead exist as a
          helpful tool to help players get a guess as to how people might react
          and find a way to handle the less mechanical/rules-oriented components
          of social interactions.
        </p>
        <table className="justify-first">
          <thead>
            <tr>
              <th>Tag</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Glamorous</th>
              <td>
                Ostentatious jewelery, golden <i>anything</i>, supercars
              </td>
            </tr>
            <tr>
              <th>Corporate</th>
              <td>
                Business clothing, Corporate-Security gear, most high-status
                low-flair equipment.
              </td>
            </tr>
            <tr>
              <th>Military</th>
              <td>Camouflage, rifles, mil-spec augments.</td>
            </tr>
            <tr>
              <th>Street</th>
              <td>
                Jeans & jackets, cheap weapons, any equipment painted or
                decorated, tattoos
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          Additionally, your character's general appearance is bound to have
          effects, positive and negative.
        </p>
      </article>
      <article>
        <h3>Influencing Others</h3>
        <p>
          There are numerous ways to be social - the various Influence Skills
          each suggest a different 'style' of manipulation. Influence skills are
          resisted by Charisma.
        </p>
        <p>
          An NPC being asked to do something will generally do it unless they
          have a reason not to. Those that do have reasons not to, will have a
          hidden tracker that shows their reasons for and against the task.
        </p>
        <p>
          A successful influence roll will let you add one or two points of
          'for' or counteract a point or two of 'against', as long as the reason
          is appropriate. Once the NPC has more reasons to say yes than no;
          they'll generally do what you ask.
        </p>
      </article>
      <article>
        <h3>Contacts & Help</h3>
        <p>
          Most characters should have a couple of Contacts, these are NPCs that
          the character knows that might be able to lend their assistance in
          matters.
        </p>
        <p>
          Contacts will often ask for payment for a task, and contacts always
          have a 'field' they specialise in, a type of help they're good at
          providing. As long as you have a means of contacting them, and they're
          available, they can be used to provide information, resources, or even
          direct support.
        </p>
      </article>
    </section>
    <section>
      <h2>Magic</h2>
      <article>
        <h3>Spellcasting</h3>
        <p>
          Spells are divided into disciplines covering various metaphysical or
          scientific concepts, such as Matter, Metamagic, Knowledge and Thermal
          Energy. Each individual 'spell' is a skill all its own, and thus can
          be used in a multitude of ways outside of combat demonstrating the
          slow, fluid and tool-like nature of magic; while also having some
          practiced, fast, combat-time uses that are pre defined.
        </p>
        <p>
          Any time a spell is cast, a counter on your character called 'Tally'
          is increased by the spell's cost. This Tally can keep increasing
          infinitely - but if you excede 35, you start risking worse mishaps.
          This means a Magician can always attempt to cast a spell - but doing
          so safely requires a bit of management. Tally is reduced by 40 every
          time the mage performs a ritual which, typically, can only be perfomed
          once a day.
        </p>
        <p>
          All magic in the world performed by mortals is a result of a mixture
          of skill and cognitive ability - each being a skill, and based off of
          Intelligence. Additionally, only characters that are 'Manablooded' can
          ever learn to cast magic.
        </p>
      </article>
      <article>
        <h3>Spirits</h3>
        <p>
          Summoning spirits can be performed by any character with the requisite
          tools - and the exotic, outlawed, and very hidden knowledge in
          Summoning Rituals. Summoning a spirit allows you to call one and ask
          it to, in exchange for some form of payment, perform a task - whether
          it's fighting, casting a spell, or even simply being a companion for a
          time.
        </p>
        <p>
          Once a negotiation is made, a spirit will bind itself to its
          summoner's existance, and loyally fulfill all <b>agreed upon</b> tasks
          to the best of its ability. Once complete, spirits will return to
          their realms.
        </p>
      </article>
    </section>
    <section>
      <h2>Technology</h2>
      <article>
        <h3>Augmentation / Cybernetics</h3>
        <p></p>
        <p></p>
        <p></p>
      </article>
      <article>
        <h3>Fast/Combat Hacking, AKA 'Decking'</h3>
        <p></p>
        <p></p>
        <p></p>
      </article>
      <article>
        <h3>Deep Hacking, AKA 'Netrunning'</h3>
        <p></p>
        <p></p>
        <p></p>
      </article>
    </section>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default GurpsQuickstart
