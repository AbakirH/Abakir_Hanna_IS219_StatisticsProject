const CSVRead = require('../CSV/Read');
const City = require('../Models/City')
const expect = require('expect');
let filename  = 'data/worldcities.csv';

test('Can Read CSV File', () => {
    let records = CSVRead.getRecords(filename, City);
    expect(records.length).toBe(6);
});

test('Testing the instantiation of the Read class', () => {
    let read = new CSVRead(filename, City);
    expect(read).toBeInstanceOf(CSVRead);
});