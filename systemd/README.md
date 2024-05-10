# Using SystemD



# Writing a Service File

A nice introduction to service file writing is [available here](https://www.baeldung.com/linux/systemd-notify).

    systemctl daemon-reload

# Waiting for Devices

SystemD can wait for **specific** devices, as shown in [this superuser question and answer](https://superuser.com/questions/1469766/make-systemd-service-wait-for-a-device-generically)
scripts can be added to do things when devices are connected and disconnected
(this was probably the main reason that systemd was written) [https://superuser.com/questions/1364509/how-can-i-start-a-systemd-service-when-a-given-usb-device-ethernet-dongle-is-p](https://superuser.com/questions/1364509/how-can-i-start-a-systemd-service-when-a-given-usb-device-ethernet-dongle-is-p)

Some interesting parts of this include:

    systemctl list-units -a -t device

Which will list the special device services that can be used in `Requires=` and
`After=`

# Documentation

[SystemD Unit Documentation](https://www.freedesktop.org/software/systemd/man/latest/systemd.unit.html)


