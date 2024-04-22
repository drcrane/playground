import { RpcService } from './services/rpc-service.service';

var rpcService = new RpcService();

export function subtract(firstNumber: number, secondNumber: number): number {
  console.warn("subtract(" + firstNumber + ", " + secondNumber + ")");
  return firstNumber - secondNumber;
}
