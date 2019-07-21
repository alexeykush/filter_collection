const findValue = (currentTarget, fields, keyword) => {
    if (fields.length === 1) {
        if (Array.isArray(currentTarget)) {
            return currentTarget.some(item => item[fields[0]] && item[fields[0]].toLowerCase() === keyword.toLowerCase())
        } else {
            return currentTarget[fields[0]] && currentTarget[fields[0]].toString().toLowerCase().includes(keyword.toLowerCase());
        }
    } else {
        currentTarget = currentTarget[fields.shift()];
        if(!currentTarget) return null;
        if (Array.isArray(currentTarget)) {
            return currentTarget.some(item => findValue(item, fields, keyword));
        } else {
            return findValue(currentTarget, fields, keyword);
        }
    }
};
const isKeyInFields = (fields, key, currentTarget) => {
    return fields.some(field => {
        const formattedField = field.split(".");
        return findValue(currentTarget, formattedField, key);
    })
};
const filterCollection = (arr, keys, flag, ...fields) => {
    return arr.filter(item => {
        if (flag) {
            return keys.split(" ").every(key => isKeyInFields(fields, key, item));
        } else {
            return keys.split(" ").some(key => isKeyInFields(fields, key, item));
        }
    })
};

const vehicles = [
    {name: "Jho", role: "user", age: 22},
    {Name: 'Jho', description: "Toyota", age: 32},
    {location: {description: {name: 'user', description: 'en_US'}}, age: 23},
    {location: {description: {name: 'en_US', description: 'Toyota'}}, age: 23},
    {name: "en_US", role: "user", age: 22},
    {location: {description: {name: 'user', description: 'nodes'}}, age: 23},
    {name: "Toyota", description: "en_US", age: 22},
    {description: "en_US", role: "user", age: 22},
];

const carArray = [
    {
        id: 1,
        make: 'BMW',
        model: 'X5',
        years: [
            2013,
            2014,
            2015,
            2016,
            2017,
            2018
        ],
        color: [
            'blue',
            'black-red',
            'white'
        ],
        engines: [
            {
                type: 'gas',
                volume: '2.0L',
                power: '150 PS',
                consumption: '39.2 mpg (Combined)'
            },
            {
                type: 'gas',
                volume: '2.4L',
                power: '180 PS',
                consumption: '45.4 mpg (Combined)'
            },
            {
                type: 'diesel',
                volume: '3.0L',
                power: '250 PS',
                consumption: '59.4 mpg (Combined)'
            },
            {
                type: 'hybrid',
                volume: '2.4L',
                power: '230 PS',
                consumption: '29.1 mpg (Combined)'
            },
            {
                type: 'electro',
                power: '185 PS',
                consumption: '3.096 miles per kWh'
            }
        ],
        headUnit: {
            make: 'Panasonic',
            model: 'CQ-LA1020L',
            size: ['5"', '6"', '8.5"'],
            locales: [
                {
                    id: 1,
                    name: 'en_US',
                    description: 'English (United States)'
                },
                {
                    id: 2,
                    name: 'en_GB',
                    description: 'English (British English)'
                },
                {
                    id: 3,
                    name: 'fr_CA',
                    description: 'French (Canada)'
                },
                {
                    id: 4,
                    name: 'fr_FR',
                    description: 'French (France)'
                },
                {
                    id: 5,
                    name: 'es_MX',
                    description: 'Spanish (Mexico)'
                }
            ]
        }
    },
    {
        id: 2,
        make: 'BMW',
        model: 'M240i',
        years: [
            2017,
            2018
        ],
        color: [
            'yellow',
            'green'
        ],
        engines: [
            {
                type: 'gas',
                volume: '2.0L',
                power: '150 PS',
                consumption: '39.2 mpg (Combined)'
            },
            {
                type: 'gas',
                volume: '2.4L',
                power: '180 PS',
                consumption: '45.4 mpg (Combined)'
            },
            {
                type: 'diesel',
                volume: '3.0L',
                power: '250 PS',
                consumption: '59.4 mpg (Combined)'
            }
        ],
        headUnit: {
            make: 'Panasonic',
            model: 'CQ-LA1020L',
            size: ['7"', '8.5"'],
            locales: [
                {
                    id: 2,
                    name: 'en_GB',
                    description: 'English (British English)'
                },
                {
                    id: 4,
                    name: 'fr_FR',
                    description: 'French (France)'
                }
            ]
        }
    },
    {
        id: 3,
        make: 'BMW',
        model: '530e',
        years: [
            2015,
            2016,
            2017,
            2018
        ],
        color: [
            'black',
            'blue',
            'pink'
        ],
        engines: [
            {
                type: 'gas',
                volume: '2.0L',
                power: '150 PS',
                consumption: '39.2 mpg (Combined)'
            },
            {
                type: 'gas',
                volume: '2.4L',
                power: '180 PS',
                consumption: '45.4 mpg (Combined)'
            }
        ],
        headUnit: {
            make: 'Panasonic',
            model: 'cq-JA1971G',
            size: ['5"', '6.5"'],
            locales: [
                {
                    id: 2,
                    name: 'en_GB',
                    description: 'English (British English)'
                },
                {
                    id: 4,
                    name: 'fr_FR',
                    description: 'French (France)'
                }
            ]
        }
    },
    {
        id: 4,
        make: 'Tesla',
        model: 'Model S',
        years: [
            2015,
            2016,
            2017
        ],
        color: [
            'red',
            'black',
            'white'
        ],
        engines: [
            {
                type: 'electro',
                power: '416 PS',
                consumption: '2.503 miles per kWh'
            }
        ],
        headUnit: {
            make: 'Belsee',
            size: ['7.1"', '10.4"'],
            locales: [
                {
                    id: 1,
                    name: 'en_US',
                    description: 'English (United States)'
                },
                {
                    id: 3,
                    name: 'fr_CA',
                    description: 'French (Canada)'
                },
                {
                    id: 5,
                    name: 'es_MX',
                    description: 'Spanish (Mexico)'
                }
            ]
        }
    },
    {
        id: 5,
        make: 'Tesla',
        model: 'Model X',
        years: [
            2016,
            2017,
            2018
        ],
        color: [
            'red',
            'black',
            'white',
            'blue'
        ],
        engines: [
            {
                type: 'electro',
                power: '440 PS',
                consumption: '3.211 miles per kWh'
            }
        ],
        headUnit: {
            make: 'Belsee',
            size: ['8.5"'],
            locales: [
                {
                    id: 1,
                    name: 'en_US',
                    description: 'English (United States)'
                },
                {
                    id: 3,
                    name: 'fr_CA',
                    description: 'French (Canada)'
                }
            ]
        }
    },
    {
        id: 6,
        make: 'Ferrari',
        model: 'F430',
        years: [
            2004,
            2005,
            2006,
            2007,
            2008,
            2009,
            2010
        ],
        color: [
            'red',
            'silver'
        ],
        engines: [
            {
                type: 'gas',
                volume: '4.3L',
                power: '490 PS',
                consumption: '73.8 mpg (Combined)'
            }
        ],
        headUnit: {
            make: 'Harman',
            model: 'A2118707190',
            size: ['5"', '6.5"'],
            locales: [
                {
                    id: 2,
                    name: 'en_GB',
                    description: 'English (British English)'
                },
                {
                    id: 4,
                    name: 'fr_FR',
                    description: 'French (France)'
                },
                {
                    id: 6,
                    name: 'de_DE',
                    description: 'German (Germany)'
                }
            ]
        }
    },
    {
        id: 7,
        make: 'KIA',
        model: 'Optima',
        years: [
            2005,
            2006,
            2007,
            2008,
            2009,
            2010,
            2011,
            2012,
            2013,
            2014,
            2015,
            2016,
            2017
        ],
        color: [
            'white',
            'black'
        ],
        engines: [
            {
                type: 'gas',
                volume: '2.0L',
                power: '180 PS',
                consumption: '41.2 mpg (Combined)'
            },
            {
                type: 'gas',
                volume: '2.4L',
                power: '210 PS',
                consumption: '49.6 mpg (Combined)'
            },
            {
                type: 'hybrid',
                volume: '2.4L',
                power: '2350 PS',
                consumption: '31.3 mpg (Combined)'
            }
        ],
        headUnit: {
            make: 'Microsoft',
            model: 'Uvo',
            size: ['6.5"', '7.5"'],
            locales: [
                {
                    id: 1,
                    name: 'en_US',
                    description: 'English (United States)'
                },
                {
                    id: 3,
                    name: 'fr_CA',
                    description: 'French (Canada)'
                }
            ]
        }
    },
    {
        id: 8,
        make: 'Lamborghini',
        model: 'Diablo',
        years: [
            1999,
            2000,
            2001,
            2002,
            2003,
            2004
        ],
        color: [
            'red',
            'black',
            'yellow',
            'white'
        ],
        engines: [
            {
                type: 'gas',
                volume: '5.9L',
                power: '575 PS',
                consumption: '71.2 mpg (Combined)'
            },
            {
                type: 'gas',
                volume: '5.7L',
                power: '550 PS',
                consumption: '65.4 mpg (Combined)'
            }
        ],
        headUnit: {
            make: 'Galardo',
            model: 'INE-W947',
            size: ['7.5"'],
            locales: [
                {
                    id: 2,
                    name: 'en_GB',
                    description: 'English (British English)'
                },
                {
                    id: 4,
                    name: 'fr_FR',
                    description: 'French (France)'
                },
                {
                    id: 6,
                    name: 'de_DE',
                    description: 'German (Germany)'
                },
                {
                    id: 7,
                    name: 'it_IT',
                    description: 'Italian (Italy)'
                }
            ]
        }
    },
    {
        id: 9,
        make: 'Bugatti',
        model: 'Veyron',
        years: [
            2005,
            2006,
            2007,
            2008,
            2009,
            2010,
            2011,
            2012,
            2013,
            2014,
            2015
        ],
        color: [
            'blue',
            'black',
            'black-red',
            'black-silver'
        ],
        engines: [
            {
                type: 'gas',
                volume: '7.9L',
                power: '1001 PS',
                consumption: '156.9 mpg (Combined)'
            }
        ],
        headUnit: {
            make: 'Galardo',
            model: 'INE-W947',
            size: ['8.5"'],
            locales: [
                {
                    id: 2,
                    name: 'en_GB',
                    description: 'English (British English)'
                },
                {
                    id: 4,
                    name: 'fr_FR',
                    description: 'French (France)'
                }
            ]
        }
    }
];

console.log(filterCollection(vehicles, 'en_US Toyota', true, "name", "description", "location.description.name", "location.description.description"));
console.log(filterCollection(carArray, "BMW gas Panasonic", true, "name", "headUnit.make", "make", "model", "type", "years", "engines.type","headUnit.locales.name"));