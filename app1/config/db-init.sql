set client_encoding=UNICODE;

-- drop tables
DROP table public.widget;
DROP SEQUENCE public.widget_id_seq;

-- create tables
CREATE TABLE public.widget (
  id Integer NOT NULL,
  name Character varying(25) NOT NULL,
  description Text NOT NULL,
  datemodified Timestamp with time zone
)
WITH (OIDS=FALSE);

ALTER TABLE public.widget OWNER to cj;
ALTER TABLE public.widget ADD CONSTRAINT pk_widget PRIMARY KEY (id);

CREATE SEQUENCE public.widget_id_seq;
ALTER TABLE public.widget_id_seq OWNER TO cj;


-- db initial data

INSERT INTO public.widget (id, name, description, datemodified) VALUES (1, 'anything', 'anything description', now());
INSERT INTO public.widget (id, name, description, datemodified) VALUES (2, 'everything', 'everything description', now());
INSERT INTO public.widget (id, name, description, datemodified) VALUES (3, 'something','something description', now());
INSERT INTO public.widget (id, name, description, datemodified) VALUES (4, 'nothing','nothing description',now());
