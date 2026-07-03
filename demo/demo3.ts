//Creating the blueprint
class Contact {
    // Encapsulation: Properties are private and hidden from direct access
    private _name: string;
    private _phone: string;

    constructor(name: string, phone: string) {
        this._name = name
        this._phone = phone
    }

    // Getter for name
    public get name(): string {
        return this._name
    }

    // Getter for phone
    public get phone(): string {
        return this._phone
    }

    // Setter for phone with basic validation
    public set phone(newPhone: string) {
        if (newPhone.length >= 7) {
            this._phone = newPhone
        } else {
            console.log('Invalid phone number length')
        }
    }

    // A method to display information
    public displayInfo(): void {
        console.log(`Name: ${this._name} | Phone: ${this._phone}`)
    }
}

// Child class1 - personal contact(sub-class)
class PersonalContact extends Contact {
    private _relationship: string

    constructor(name: string, phone: string, relationship: string) {
        super(name, phone)  // inheritance
        this._relationship = relationship
    }

    // Polymorphism: overriding the parent's displayInfo
    public override displayInfo(): void {
        console.log(`[Personal] Name: ${this.name} | Phone: ${this.phone} | Relationship: ${this._relationship}`)

    }
}

class BusinessContact extends Contact {
    private _company: string

    constructor(name: string, phone: string, company: string) {
        super(name, phone)
        this._company = company
    }

    public override displayInfo(): void {
        console.log(`[Business] Name: ${this.name} | Phone: ${this.phone} | Company: ${this._company}`)
    }
}

class AddressBook {
    // composition: An address book contains an array of contact objects
    private contacts: Contact[] = []

    public addContatct(contact: Contact): void {
        this.contacts.push(contact)
        console.log(`Successfully aadded ${contact.name} to the address book`);
    }

    public deleteContsct(contact: Contact): void {
        this.contacts.
    }

    public displayAll(): void {
        console.log('\n--- Address book entries ---');
        this.contacts.forEach(contact => {
            // Run time polymorphism: The correct displayInfo executes depending on the object type
            contact.displayInfo()
        })
    }

    // Search contact by name
    public searchByName(name: string) {

    }
}


//Display all contacts
