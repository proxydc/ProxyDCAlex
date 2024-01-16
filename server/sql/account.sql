-- Table: public.account

-- DROP TABLE IF EXISTS public.account;

CREATE TABLE IF NOT EXISTS public.account
(
    id integer NOT NULL DEFAULT nextval('account_id_seq'::regclass),
    login_name character varying(32) COLLATE pg_catalog."default" NOT NULL,
    display_name character varying(32) COLLATE pg_catalog."default",
    pass_word character varying(128) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT account_pkey PRIMARY KEY (id, login_name)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.account
    OWNER to postgres;