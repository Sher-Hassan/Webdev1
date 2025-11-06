import React, { useState } from 'react'
import Btn1 from '../components/Btn1.jsx'
import Btn2 from '../components/Btn2.jsx'
import HomeCard from '../components/Home-Card.jsx'
import card1 from '../assets/card1.svg'
import MovingS from '../components/MovingS.jsx'
import '../styles/Home.css'

export default function Home() {
  const products = [
    {
      id: 'swap',
      icon: '⟲',
      title: 'PRIVACY SWAP',
      bannerTitle: 'TRADING WITHOUT A\nTRACE',
      description:
        "APP'S PRIVACY SWAP ROUTES TRANSACTIONS THROUGH CONTINUOUS LIQUIDITY POOLS ACROSS SOLANA, MIXING FLOWS AUTOMATICALLY. USERS CAN SWAP ANY TOKEN, INCLUDING PUMP.FUN AND MIGRATED ASSETS, WHILE REMAINING FULLY ANONYMOUS.",
    },
    {
      id: 'send',
      icon: '✈',
      title: 'PRIVACY SEND',
      bannerTitle: 'SEND PRIVATELY\nAND SECURELY',
      description:
        'TRANSFER FUNDS WITHOUT LINKING WALLETS OR REVEALING ON-CHAIN IDENTITIES.',
    },
    {
      id: 'market',
      icon: '▦',
      title: 'PRIVATE MARKETPLACE',
      bannerTitle: 'PRIVATE MARKETPLACE\nAND EXCHANGES',
      description: 'BUY, SELL, OR TRADE IN TOTAL PRIVACY — NO PUBLIC LISTINGS.',
    },
    {
      id: 'ephemeral',
      icon: '▣',
      title: 'EPHEMERAL WALLETS',
      bannerTitle: 'EASILY CREATE TEMP\nWALLETS',
      description: 'CREATE SHORT-LIVED WALLETS FOR ONE-TIME USES TO PROTECT LONG-TERM PRIVACY.',
    },
    {
      id: 'api',
      icon: '▤',
      title: 'APP API',
      bannerTitle: 'INTEGRATE PRIVACY\nPROGRAMMATICALLY',
      description: 'BUILDERS CAN INTEGRATE PRIVACY FEATURES USING OUR API.',
    },
    {
      id: 'docs',
      icon: '▤',
      title: 'APP DOCS',
      bannerTitle: 'DEVELOPER DOCS &\nGUIDES',
      description: 'DETAILED DOCUMENTATION FOR BUILDING ON APP.',
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(0);

  const faqs = [
    {
      q: 'HOW DOES APP ENSURE PRIVACY?',
      a: `APP USES DISPOSABLE WALLETS AND CONTINUOUS PRIVACY POOLS TO SEPARATE EVERY TRANSACTION FROM ITS SOURCE.YOUR FUNDS REMAIN SECURE, AND YOUR IDENTITY NEVER APPEARS ON-CHAIN.`,
    },
    {
      q: 'WHAT PRODUCTS DOES APP OFFER?',
      a: 'PRIVACY SWAP, PRIVACY SEND, EPHEMERAL WALLETS, PRIVATE MARKETPLACE, AND A DEVELOPER-FRIENDLY API.',
    },
    {
      q: 'WHO CAN USE APP?',
      a: 'ANYONE SEEKING STRONGER ON-CHAIN PRIVACY: INDIVIDUALS, BUILDERS, AND SERVICES THAT NEED TRANSACTION CONFIDENTIALITY.',
    },
    {
      q: 'HOW ARE APP TRANSACTIONS DIFFERENT FROM MIXERS?',
      a: 'APP BUILDS PRIVACY INTO LIQUIDITY POOLS AND EPHEMERAL WALLETS, REMOVING ADDRESS LINKS RATHER THAN SIMPLE BATCH MIXING.',
    },
    {
      q: 'HOW DO I GET STARTED?',
      a: 'CONNECT A SOLANA WALLET, CREATE OR USE AN EPHEMERAL WALLET, AND FOLLOW THE ON-SCREEN FLOW. SEE THE DOCS FOR DETAILED STEPS AND DEVELOPER EXAMPLES.',
    },
  ];  

  const [openFaq, setOpenFaq] = useState(-1); // start closed by default

  function toggleFaq(i) {
    // debug: log toggles so it's easy to verify in browser console
    // (remove this log when debugging is complete)
    // eslint-disable-next-line no-console
    console.log('toggleFaq', { index: i, prev: openFaq });
    setOpenFaq((prev) => (prev === i ? -1 : i));
  }

  function selectProduct(index) {
    setSelectedProduct(index);
  }

  return (
    <>
    <section className="home-container-1">
      <div className="hero"> 
        <div className="hero-left">
          <div className="headline">
            <h1 className="home-t home-t1"><span>NO</span><span>ADDRESSES,</span></h1>
            <h1 className="home-t home-t2"><span>ONLY</span><span>PRIVACY.</span></h1>

          </div>

          <p className="hero-sub">
            WE EMPOWER YOU TO TRADE, SEND, AND SWAP PRIVATELY
            <br />
            REDEFINING PRIVACY ON SOLANA.
          </p>

          <div className="hero-ctas">
            <Btn1 text="LAUNCH APP" />
            <Btn2 text="ABOUT APP" />
          </div>
        </div>
      </div>

      <div className="cards-row">
        <HomeCard
          icon={card1}
          title={'PRIVACY SWAP'}
          subtitle={'SWAP ANY SOLANA TOKEN PRIVATELY THROUGH'}
          description={'CONTINUOUS POOLS THAT ERASE YOUR TRACE.'}
        />

        <HomeCard
          icon={card1}
          title={'PRIVACY SEND'}
          subtitle={'TRANSFER FUNDS WITHOUT LINKING WALLETS OR'}
          description={'REVEALING ON-CHAIN IDENTITIES.'}
        />

        <HomeCard
          icon={card1}
          title={'PRIVATE PLACE'}
          subtitle={'BUY, SELL, OR TRADE IN TOTAL PRIVACY'}
          description={'NO PUBLIC LISTINGS, NO EXPOSURE.'}
        />
      </div>

    </section>
    <section className='home-container-2'>
      <div className="About-App">
        <div className="About-left">
         <p className="About-sub">
            /ABOUT APP
          </p>
          <div className="About-headline">
            <h1 className="About-t About-t1 About-t-all"><span className='About-Words'>WE</span><span className='About-Words'>PROVIDE</span><span className='About-Words'>A</span><span className='About-Words'>PRIVACY</span></h1>
            <h1 className="About-t About-t2 About-t-all"><span className='About-Words'>LAYER</span><span className='About-Words'>THAT</span><span className='About-Words'>SECURES</span></h1>
            <h1 className="About-t About-t2 About-t-all"><span className='About-Words'>YOUR</span><span className='About-Words'>ACTIVITY</span><span className='About-Words'>AND</span></h1>
            <h1 className="About-t About-t2 About-t-all"><span className='About-Words'>REMOVES</span><span className='About-Words'>YOUR</span><span className='About-Words'>TRACE</span></h1>
          </div>
        </div>
      </div>

      <div className="About-cards-row">
        <HomeCard
          className="About-Card"
          title={'/ MISSION'}
          subtitle={''}
          description={<>
            OUR VISION IS TO REDEFINE PRIVACY ACROSS SOLANA
            <br />
            BY CREATING A DECENTRALIZED, ADDRESSLESS
            <br />
            ECONOMY WHERE SECURITY AND FREEDOM COEXIST.
          </>}
        />

        <HomeCard
          className="About-Card"
          title={'/ VISION'}
          subtitle={''}
          description={<>
            OUR VISION IS TO REDEFINE PRIVACY ACROSS SOLANA
            <br />
            BY CREATING A DECENTRALIZED, ADDRESSLESS
            <br />
            ECONOMY WHERE SECURITY AND FREEDOM COEXIST.
          </>}
        />
      </div>
    </section>
    <MovingS />

    <section className='home-container-3'>
      <div className="home-section-3">
        <video
          className="bg-video"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="video-overlay" />

        <div className="center-plus" aria-hidden="true">
          <span className="plus-vertical" />
          <span className="plus-horizontal" />
        </div>

        <div className="corner top-left" />
        <div className="corner top-right" />
        <div className="corner bottom-left" />
        <div className="corner bottom-right" />

        <div className="section-caption">OUR MISSION IS TO CREATE A PRIVATE DIGITAL LANDSCAPE FOR EVERYONE ON SOLANA.</div>
      </div>
    </section>

    <section className='home-container-4'>
      <div className="home-section-4">
        <div className="grid-bg" aria-hidden="true"></div>

        <div className="CTA-heading">
          <h1>EXPLORE THE FUTURE OF<br/> PRIVACY ON SOLANA AND<br/>ACCESS APP DOCS TODAY</h1>
        </div>

        <div className="CTA">
          <div className="cta-btn btn1-wrap">
            <Btn1 text="VIEW DOCS" />
          </div>
          <div className="cta-btn btn2-wrap">
            <Btn2 text="LAUNCH APP" />
          </div>
        </div>
      </div>
    </section>

    <section className='home-container-5'>
      <h3 className="products-heading">PRIVACY SOLUTIONS FOR EVERY<br/>USE CASE</h3>
      <div className="products-section">
        <div className="products-left">
          <ul className="products-list">
            {products.map((p, i) => (
              <li
                key={p.id}
                role="button"
                tabIndex={0}
                className={`products-item ${selectedProduct === i ? 'active' : ''}`}
                onClick={() => selectProduct(i)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') selectProduct(i); }}
              >
                <span className="products-icon">{p.icon}</span>
                <span className="products-label">{p.title}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="products-right">
          <div className="products-panel">
            <div className="products-panel-grid" aria-hidden="true"></div>
            <h2 className="products-title">{products[selectedProduct].bannerTitle.split('\n').map((line, idx) => (
              <span key={idx}>{line}<br/></span>
            ))}</h2>
            <p className="products-desc">{products[selectedProduct].description}</p>
          </div>
        </div>
      </div>
    </section>

    <section className='home-container-6'>
      <div className="faq-section">
        <p className="faq-pretitle">/ DOCS &amp; SUPPORT</p>
        <h2 className="faq-heading">YOUR MOST COMMON<br/>QUESTIONS ABOUT APP ANSWERED</h2>

        <div className="faq-list-wrap">
          <ul className="faq-list">
            {faqs.map((f, i) => (
              <li key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFaq(i)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleFaq(i); } }}
                  aria-expanded={openFaq === i}
                >
                  <span className="faq-qtext">{f.q}</span>
                  <span className="faq-toggle" aria-hidden="true">{openFaq === i ? '×' : '+'}</span>
                </button>

                <div className="faq-body" aria-hidden={openFaq === i ? 'false' : 'true'}>
                  {f.a.split('\n').map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}
