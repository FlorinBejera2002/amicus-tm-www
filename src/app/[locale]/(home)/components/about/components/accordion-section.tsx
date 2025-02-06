'use client'

import Accordion from '@/app/[locale]/common/accordion'
import InViewTransition from '@/app/[locale]/common/in-view-transition'
import { useState } from 'react'

const AccordionSection = () => {
  const [expanded, setExpanded] = useState(-1)

  const accordionItems = [
    {
      description: (
        <>
          <p>
            Our mission is built on values, which determine our actions and way
            of working.
          </p>
          <h6 className="text-sm">Love for Christ</h6>
          <p>
            All things are from Him, through Him, and for Him. We love God by
            living for Him, and what we do is a response to His love. We act in
            a Christ-centered way, and our focus is on Christ.
          </p>
          <h6 className="text-sm">The salvation of the lost</h6>
          <p>
            Love for the Lord Jesus Christ leads us to love people. Our goal is
            to see Him as the Lord and Savior of many people. His love has
            ignited a passion for people in us. The conviction that Jesus Christ
            is the only way of salvation drives us to use these methods to reach
            people's hearts. The importance of the family is a priority;
            therefore, our service focuses on families.
          </p>
          <h6 className="text-sm">Concrete action for Christ</h6>
          <p>
            motivating, and contagious for believers in favor of the unchurched,
            those who have fallen away from faith, and those with various
            problems.
          </p>
          <h6 className="text-sm">Romanians for Romanians everywhere</h6>
          <p>
            Like the Apostle Paul, our heart's desire and prayer to God is for
            Romanians to be saved (Romans 10:1, 11:13-14). We believe in a
            global vision that goes beyond the context of local and
            denominational church involvement and involves unity, diversity, and
            dedication to Christ's cause in the world. We support long-term or
            short-term missionary work in specific areas of the world.
          </p>
        </>
      ),
      title: 'Arise Mission'
    },
    {
      description: (
        <>
          <p>
            Our mission can be summarized in two words: salvation and action.
            Salvation for those who do not know Christ and mobilization of
            believers through concrete actions.
          </p>
          <h6 className="text-sm">Love</h6>
          <p>
            God's love is the source of our passion, and we desire people to be
            overwhelmed by it. We pray and intercede for people passionately.
          </p>
          <h6 className="text-sm">Dedication</h6>
          <p>
            Without dedication in all areas of our work, there is no success. We
            have dedicated collaborators who are a source of inspiration for
            many.
          </p>
          <h6 className="text-sm">Authenticity</h6>
          <p>
            We want to be real, honest, humble, and separated from any religious
            forms, anchored in the truth of the Scriptures, which we communicate
            in love. Being authentic Christians in our context means that our
            actions are the best evidence of our authenticity.
          </p>
          <h6 className="text-sm">Unity in collaboration</h6>
          <p>
            We constantly seek zonal and local collaborations with missions,
            missionaries, evangelists, churches, and collaborators with whom we
            serve together for the Kingdom. We form partnerships and associate
            with those who share the same biblical values as us. We are aware
            that the work needs to be carried out in collaboration with
            believers at all levels of function.
          </p>
        </>
      ),
      title: 'Arise Working Principles'
    },
    {
      description: (
        <>
          <p>
            We believe that the Bible, both the Old and New Testaments, is
            verbally inspired by God, inerrant in the original, unique, and the
            final authority in matters of faith, morality, and Christian
            practice.
          </p>
          <p>
            We believe in one God, the Infinite and Perfect Spirit, existing
            from eternity in three persons: the Father, the Son, and the Holy
            Spirit, the Creator of the entire universe.
          </p>
          <p>
            We believe that Jesus Christ was conceived by the Holy Spirit and
            born of the Virgin Mary, in His sinless life, being at the same time
            true God and true man.
          </p>
          <p>
            We believe that the Lord Jesus Christ died for our sins, according
            to the Scriptures, as a representative and substitutionary
            sacrifice, and that all who believe and trust in Him are justified
            by His shed blood.
          </p>
          <p>
            We believe in the bodily resurrection of our crucified Lord and in
            His Ascension to heaven, where He currently intercedes for us as
            Advocate and High Priest.
          </p>
          <p>
            We believe that man was created by God in His image and was good and
            righteous; however, he sinned through his own choice by
            disobedience, coming out from under God's authority, and as a
            result, he suffered not only physical death but also spiritual
            death, i.e., separation from God; that all human beings are born
            with a sinful nature, and when they reach the age of moral
            responsibility, they become sinners in thought, speech, and deed.
          </p>
          <p>
            We believe that all who receive the Lord Jesus Christ by faith as
            Lord and Savior are born again by the Holy Spirit and, as a result,
            become children of God.
          </p>
          <p>
            We believe in the salvation from sin (the salvation of man) through
            God's grace, through man's repentance, and through water baptism as
            a result of the change worked by the Spirit through the Word of God.
          </p>
          <p>
            We believe in the Baptism of the Holy Spirit, in the operation of
            spiritual gifts for the service of the Lord's Church and the
            unchurched world
          </p>
          <p>
            We believe in that \"blessed hope\": the imminent return of our Lord
            and Savior Jesus Christ and the rapture of the Church.
          </p>
          <p>
            We believe in the bodily resurrection of the just and the unjust,
            for the eternal happiness of the saved and for the eternal
            punishment of the lost through God's judgment.
          </p>
        </>
      ),
      title: 'Arise Beliefs'
    }
  ]

  return (
    <div className="flex flex-col gap-2 md:pl-0 bg-transparent">
      {accordionItems.map((item, idx) => (
        <InViewTransition delay={0.75 + idx * 0.25} key={item.title}>
          <Accordion
            customClassname="!pl-0 bg-transparent"
            description={item.description}
            expanded={expanded}
            idx={idx}
            setExpanded={setExpanded}
            title={item.title}
          />
        </InViewTransition>
      ))}
    </div>
  )
}

export default AccordionSection
