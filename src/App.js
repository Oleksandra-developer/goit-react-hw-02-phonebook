import React, { Component } from "react";
import Form from "./components/Form/Form";
import styles from "./components/container.module.css";
import shortid from "shortid";
import ContactsList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    // name: "",
    // number: "",
    filter: "",
  };
  addContact = ({ name, number }) => {
    // {if name===}
    if (this.state.contacts.find((contact) => contact.name === name)) {
      alert(`${name}  is alredy in contacts`);
      return;
    }

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleTodos = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    // const { contacts } = this.state;
    const visibleContact = this.getVisibleTodos();
    return (
      <section className={styles.container}>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contact List</h2>

        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactsList
          contacts={visibleContact}
          onDeleteContact={this.deleteContact}
        />
      </section>
    );
  }
}

export default App;
