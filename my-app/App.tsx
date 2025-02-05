import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [customers, setCustomers] = useState<{ name: string; email: string; phone: string }[]>([]);

  function handleSubmit() {
    if (name && email && phone) {
      setCustomers([...customers, { name, email, phone }]);
      setName("");
      setEmail("");
      setPhone("");
    }
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="enter name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="enter email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="enter phone"
            value={phone}
            onChangeText={setPhone}
          />

         
         
        </View>
        <View style={styles.button}>
        <Button
            
            onPress={handleSubmit}
            title="Add Customer"
          />
        </View>
        <View style={styles.listContainer}>
          {customers.map((c, index) => (
            <Text key={index} style={styles.customerText}>
              {c.name} - {c.email} - {c.phone}
            </Text>
          ))}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderBlockColor:'blue'
  },
  listContainer: {
    marginTop: 20,
    padding: 10,
  },
  customerText: {
    fontSize: 16,
    fontFamily:'arial',
    marginVertical: 5,
  },
  button: {
    marginTop: 10,
    alignItems:"center",
    width: "40%",
    borderRadius: 10,
    overflow: "hidden",
  }
});
