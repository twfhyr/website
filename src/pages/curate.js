import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Sash from "../components/sash";
import HorizontalCard from "../components/horizontal-card";
import VerticalCard from "../components/vertical-card";

import Sponsors from "../components/sponsors";
import Contact from "../components/contact";

import Deversifi from "src/assets/images/deversifi.png";
import Curate1 from "src/assets/images/curate1.png";
import Curate2 from "src/assets/images/curate2.png";
import CurateHero from "src/assets/images/curate-hero.png";

import Ninja from "src/assets/svgs/ninja-black-text.svg";

import { Badge, Container, Row, Col } from "react-bootstrap";

import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

import styles from "./styles/curate.module.css";

const Curate = ({ intl }) => (
  <Layout>
    {" "}
    <SEO title="Curate" lang={intl.locale} />
    <Container as="main" fluid className={styles.curate}>
      <section className={styles.hero}>
        <h1>
          <FormattedMessage id="curate.section-hero.h1" />
        </h1>
        <h2>
          <FormattedMessage id="curate.section-hero.h2" />
        </h2>

        <Container className={styles.buttonWrapper}>
          <a href="https://curate.kleros.io" target="blank" rel="noopener noreferrer" className="btn btn-primary">
            <FormattedMessage id="curate.section-hero.button-primary" />
          </a>
        </Container>
        <img src={CurateHero} alt={CurateHero} />
      </section>
      <Sash
        as="div"
        figures={{
          first: {
            title: intl.formatMessage({
              id: "curate.sash.first.title",
            }),
            paragraph: intl.formatMessage({
              id: "curate.sash.first.paragraph",
            }),
            icon: "scales",
          },
          second: {
            title: intl.formatMessage({
              id: "curate.sash.second.title",
            }),
            paragraph: intl.formatMessage({
              id: "curate.sash.second.paragraph",
            }),
            icon: "epsilon",
          },
          third: {
            title: intl.formatMessage({
              id: "curate.sash.third.title",
            }),
            paragraph: intl.formatMessage({
              id: "curate.sash.third.paragraph",
            }),
            icon: "kleros",
          },
        }}
      />
      <section className={styles.usecases}>
        <h1>{intl.formatMessage({ id: "curate.section-2.h1" })}</h1>
        <div className={styles.cards}>
          <HorizontalCard
            content={{
              icon: "token",
              text: intl.formatMessage({ id: "curate.section-2.cards.1" }),
            }}
          />
          <HorizontalCard
            content={{
              icon: "moderation",
              text: intl.formatMessage({ id: "curate.section-2.cards.2" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "hotel",
              text: intl.formatMessage({ id: "curate.section-2.cards.3" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "restaurant",
              text: intl.formatMessage({ id: "curate.section-2.cards.4" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "insurance",
              text: intl.formatMessage({ id: "curate.section-2.cards.5" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "eCommerce",
              text: intl.formatMessage({ id: "curate.section-2.cards.6" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "social",
              text: intl.formatMessage({ id: "curate.section-2.cards.7" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "spam",
              text: intl.formatMessage({ id: "curate.section-2.cards.8" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "plus",
              text: intl.formatMessage({ id: "curate.section-2.cards.9" }),
            }}
          />
        </div>
      </section>

      <section className="masked">
        <span className="trapezium" />
        <h1>Kleros Curate</h1>
        <h2>Create your own token curated registry and put the information power in the hands of your community</h2>
        <a className="btn btn-secondary">Start Using Kleros Curate</a>
      </section>
      <section>
        <h1> Who Is Using This?</h1>
        <Container className="mt-5 d-flex flex-wrap justify-content-around">
          <Badge as="a" href="https://www.deversifi.com/" className={styles.badge}>
            <span class={styles.helper}></span>
            <img src={Deversifi} />
          </Badge>
          <Badge as="a" href="https://uniswap.ninja/" className={styles.badge}>
            <Ninja />
          </Badge>
        </Container>
      </section>
      <div></div>
      <div id="holder" style={{ position: "relative", height: "82vmin", maxWidth: "2000px", margin: "auto" }}>
        <div id="logo" style={{ float: "right" }}>
          <img src={Curate1} style={{}} />
        </div>
        <div style={{ float: "left", position: "absolute", top: "30vmin" }}>
          <img src={Curate2} />
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
      <section>
        <hr />
        <Contact />
        <Sponsors extraClass="mt-5" />
      </section>
    </Container>
  </Layout>
);

export default injectIntl(Curate);
