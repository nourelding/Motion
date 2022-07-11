FROM continuumio/miniconda3:latest

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && apt-get install -y nodejs

RUN mkdir -p /backend
RUN mkdir -p /scripts
RUN mkdir -p /static-files
RUN mkdir -p /media-files
RUN mkdir -p /frontend

COPY ./backend /backend
COPY ./scripts /scripts
RUN chmod + ./scripts*

RUN /opt/conda/bin/conda env create -f /backend/requirements.yml

ENV PATH /opt/conda/envs/motion-project-backend/bin:$PATH
RUN echo "source activate motion-project-backend" >~/.bashrc


WORKDIR /frontend
COPY ./frontend/package.json /frontend/
COPY ./frontend/package-lock.json /frontend/
RUN npm install
COPY ./frontend /frontend
RUN npm run build

WORKDIR /backend