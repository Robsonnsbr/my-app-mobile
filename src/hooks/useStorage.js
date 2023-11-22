import AsyncStorage from "@react-native-async-storage/async-storage";

export default useStorage = () => {
  const getItem = async (key) => {
    try {
      // await AsyncStorage.removeItem(key);
      const passwordsDB = await AsyncStorage.getItem(key);
      const passwords = JSON.parse(passwordsDB) || [];
      return passwords;
    } catch (error) {
      console.log(`Erro ao Buscar item ${error.message}`);
    }
  };

  const setItem = async (key, item) => {
    try {
      const passwords = await getItem(key);
      const hasItem = passwords.find((password) => password === item) || false;
      const passwordsNews = passwords.concat(item);

      if (passwords.length <= 0) {
        passwords.push(item);
        await AsyncStorage.setItem(key, JSON.stringify(passwords));
        return item;
      }

      if (hasItem) {
        console.log(`O Password ${item} Já está salvo`);
        return `O Password ${item} Já está salvo`;
      }

      await AsyncStorage.setItem(key, JSON.stringify(passwordsNews));
      return passwordsNews;
    } catch (error) {
      console.log(`Erro ao Salvar password ${error.message}`);
      return "Erro ao Salvar password";
    }
  };

  const deleteItem = async (key, item) => {
    try {
      const passwordsDB = await getItem(key);
      const hasPassId = passwordsDB.findIndex((password, index) => {
        if (password === item) {
          return index;
        }
        return false;
      });
      const resultIndex = hasPassId !== -1 ? hasPassId : 0;

      if (resultIndex !== -1) {
        const passwordsNews = passwordsDB.filter(
          (_, index) => index !== resultIndex
        );

        if (passwordsNews.length >= 1) {
          await AsyncStorage.setItem(key, JSON.stringify(passwordsNews));
          return passwordsNews;
        } else {
          await AsyncStorage.removeItem(key);
        }
      }

      if (!hasPassId) {
        console.log(`Password ${item} not found`);
        return `Password not found`;
      }
    } catch (error) {
      console.log(`Erro ao Deletar item ${error.message}`);
      return `Erro ao Deletar Password ${error.message}`;
    }
  };

  return {
    getItem,
    setItem,
    deleteItem,
  };
};
