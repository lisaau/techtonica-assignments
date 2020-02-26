--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: hearted; Type: TABLE; Schema: public; Owner: tpl619_2
--

CREATE TABLE public.hearted (
    user_id integer NOT NULL,
    photo_id integer NOT NULL
);


ALTER TABLE public.hearted OWNER TO tpl619_2;

--
-- Name: photos; Type: TABLE; Schema: public; Owner: tpl619_2
--

CREATE TABLE public.photos (
    photo_id integer NOT NULL,
    user_id integer,
    url text,
    date_added date
);


ALTER TABLE public.photos OWNER TO tpl619_2;

--
-- Name: users; Type: TABLE; Schema: public; Owner: tpl619_2
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    username text,
    email text,
    date_joined date
);


ALTER TABLE public.users OWNER TO tpl619_2;

--
-- Data for Name: hearted; Type: TABLE DATA; Schema: public; Owner: tpl619_2
--

COPY public.hearted (user_id, photo_id) FROM stdin;
1	3
1	5
2	1
2	4
3	1
3	2
3	3
\.


--
-- Data for Name: photos; Type: TABLE DATA; Schema: public; Owner: tpl619_2
--

COPY public.photos (photo_id, user_id, url, date_added) FROM stdin;
1	1	https://www.instagram.com/p/BmkTuqKH8bGU8OnnK1OrGrYiGOgHzfnGuZFkOo0/	2020-02-25
2	1	https://www.instagram.com/p/B5ycUf-HFXkGqwrle4jWVQcRCVUymUaBOUWq400/	2020-02-25
3	2	https://www.instagram.com/p/Bfky8AQAPUxCR3Niyvewm865AZ_fg6RerPeFEA0/	2020-02-25
4	3	https://www.instagram.com/p/BftnasxA2wglwkFILz-_L3fTfrHa57yt6gTOlU0/	2020-02-24
5	3	https://www.instagram.com/p/BeV_Qq3AZUL4Gcz2MsLkzVViF3aVoIv7V8G_os0/	2020-02-25
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tpl619_2
--

COPY public.users (user_id, username, email, date_joined) FROM stdin;
1	Lisa	lisa@techtonica.org	2020-02-25
2	Quincey	quincey@techtonica.org	2020-02-25
3	Bill	bill@techtonica.org	2020-02-24
\.


--
-- Name: photos photos_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl619_2
--

ALTER TABLE ONLY public.photos
    ADD CONSTRAINT photos_pkey PRIMARY KEY (photo_id);


--
-- Name: hearted pk_hearted; Type: CONSTRAINT; Schema: public; Owner: tpl619_2
--

ALTER TABLE ONLY public.hearted
    ADD CONSTRAINT pk_hearted PRIMARY KEY (user_id, photo_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl619_2
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: hearted hearted_photo_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl619_2
--

ALTER TABLE ONLY public.hearted
    ADD CONSTRAINT hearted_photo_id_fkey FOREIGN KEY (photo_id) REFERENCES public.photos(photo_id);


--
-- Name: hearted hearted_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl619_2
--

ALTER TABLE ONLY public.hearted
    ADD CONSTRAINT hearted_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- Name: photos photos_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl619_2
--

ALTER TABLE ONLY public.photos
    ADD CONSTRAINT photos_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- PostgreSQL database dump complete
--

