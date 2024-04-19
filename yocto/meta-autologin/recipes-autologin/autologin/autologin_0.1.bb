SUMMARY = "autologin recipe"
DESCRIPTION = "Simple recipe to compile a very simple automatic root login programme"
HOMEPAGE = "https://example.com"
LICENSE = "MIT"
LIC_FILES_CHKSUM = "file://${COMMON_LICENSE_DIR}/MIT;md5=0835ade698e0bcf8506ecda2f7b4f302"

SRC_URI = "file://autologin.c"

S = "${WORKDIR}"

do_compile() {
    echo "Compiling..."
	${CC} ${LDFLAGS} autologin.c -o autologin
}

do_install() {
    echo "Installing..."
	install -d ${D}${bindir}
	install -m 0755 autologin ${D}${bindir}
}

FILES_${PN} += "${D}${bindir}/"
ALLOW_EMPTY_${PN} = "1"

