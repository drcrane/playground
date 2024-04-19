FROM ubuntu:22.04

SHELL ["/bin/bash", "-c"]
# Your system needs to support the en_US.UTF-8 locale.

RUN apt-get update &&\
    apt-get upgrade -y && \
    DEBIAN_FRONTEND="noninteractive" apt-get install -y sudo tzdata locales

RUN locale-gen en_US.UTF-8 && \
    update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8

# Host dependencies according to https://docs.yoctoproject.org/4.3.999/singleindex.html
RUN apt-get update && \
    apt-get install -y \
            gawk wget git diffstat unzip texinfo gcc build-essential chrpath socat cpio \
            python3 python3-pip python3-pexpect xz-utils debianutils iputils-ping       \
            python3-git python3-jinja2 libegl1-mesa libsdl1.2-dev python3-subunit       \
            mesa-common-dev zstd liblz4-tool file locales libacl1 openssh-client        \
			doas && \
    apt-get clean

# Install other helpful software
RUN apt-get update && \
    apt-get install -y \
        vim tmux screen rsync htop iftop iotop && \
    apt-get clean

RUN useradd -m yocto &&\
    echo 'yocto ALL=(ALL:ALL) NOPASSWD:ALL' > /etc/sudoers.d/yocto &&\
	echo 'permit nopass keepenv yocto' > /etc/doas.conf

USER yocto

WORKDIR /home/yocto

