
FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye

ENV TZ Europe/Oslo

ARG INSTALL_ZSH="false"
ARG UPGRADE_PACKAGES="false"
ARG USE_MOBY="true"
ARG DOCKER_VERSION="latest"
ENV DOCKER_BUILDKIT=1

ARG USERNAME=automatic
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
     && apt-get -y install --no-install-recommends curl silversearcher-ag fonts-powerline fonts-firacode

VOLUME [ "/var/lib/docker" ]

RUN su node -c "npm install -g gitmoji-cli"
