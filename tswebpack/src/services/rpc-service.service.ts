import mqtt from 'mqtt';

//declare var mqtt

export class ServerAndCredentials {
	url: string;
	hostname: string;
	port: number;
	username: string;
	password: string;
	clientId: string | null;
}

export class RpcService {
	constructor() {
		var client = mqtt.connect("ws://127.0.0.1:9000");
		client.on("connect", function() {
			client.subscribe("presence", function(err: any) {
				if (!err) {
					client.publish("presence", "Hello mqtt");
				}
			});
		});

		client.on("message", function(topic: string, message: Buffer) {
			// message is Buffer
			console.log(message.toString());
			// hopefully cause disconnect
			//client.end();
		});

		client.on("end", function() {
			console.log("disconnected");
		});
	}

	/*
	connect(serverAndCredentials: ServerAndCredentials | null): void {
		if (this.client == null && serverCredentials == null) {
			throw new Error("Cannot connect to null");
		}
		if (this.client == null) {
			this.client = mqtt.connect(serverAndCredentials);
		}
	}
	*/
}
