import { NativeModules } from "react-native";

export const generateUUID = () => {
  try {
    const cryptoModule = NativeModules.crypto;

    if (cryptoModule && cryptoModule.getRandomBytes) {
      const randomBytes = cryptoModule.getRandomBytes(16);

      const uuid = randomBytes.reduce(
        (acc: any, byte: { toString: (arg0: number) => string }) =>
          acc + byte.toString(16).padStart(2, "0"),
        ""
      );

      return `${uuid.substr(0, 8)}-${uuid.substr(8, 4)}-${uuid.substr(
        12,
        4
      )}-${uuid.substr(16, 4)}-${uuid.substr(20)}`;
    } else {
      console.error(
        "A função crypto não está disponível neste ambiente React Native."
      );
      return null;
    }
  } catch (error) {
    console.error("Erro ao gerar UUID:", error);
    return null;
  }
};
