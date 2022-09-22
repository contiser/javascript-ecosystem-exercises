import {statusComparator} from "./status-comparator";
import {test, expect} from "@jest/globals";
///should sort todos by status

const todoObject1 = {
    timeStamp: new Date(),
    description: 'element 1',
    id: 1,
    done: false
};
const todoObject2 = {
    timeStamp: new Date(),
    description: 'element 2',
    id: 2,
    done: true
};
test('should sort todos by status', () => {
   expect(statusComparator(todoObject1,todoObject2)[0].id).toBe(2);
});