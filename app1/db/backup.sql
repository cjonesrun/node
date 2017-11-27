--
-- PostgreSQL database dump
--

-- Dumped from database version 10.1
-- Dumped by pg_dump version 10.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: widget; Type: TABLE; Schema: public; Owner: cj
--

CREATE TABLE widget (
    id integer NOT NULL,
    name character varying(25) NOT NULL,
    description text NOT NULL,
    datemodified timestamp with time zone
);


ALTER TABLE widget OWNER TO cj;

--
-- Name: widget_id_seq; Type: SEQUENCE; Schema: public; Owner: cj
--

CREATE SEQUENCE widget_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE widget_id_seq OWNER TO cj;

--
-- Data for Name: widget; Type: TABLE DATA; Schema: public; Owner: cj
--

COPY widget (id, name, description, datemodified) FROM stdin;
1	anything	anything description	2017-11-19 15:35:51.025859+00
2	everything	everything description	2017-11-19 15:35:51.035328+00
3	something	something description	2017-11-19 15:35:51.037387+00
4	nothing	nothing description	2017-11-19 15:35:51.038033+00
\.


--
-- Name: widget_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cj
--

SELECT pg_catalog.setval('widget_id_seq', 1, false);


--
-- Name: widget pk_widget; Type: CONSTRAINT; Schema: public; Owner: cj
--

ALTER TABLE ONLY widget
    ADD CONSTRAINT pk_widget PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

