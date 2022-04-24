import {mount} from "@vue/test-utils";
import Habit from "@/components/Habit";

describe("Habit", () => {
    it("makes sure the habit name is rendered", () => {
        const habitName = "Learn something new";
        const wrapper = mount(Habit, {
            propsData: {
                name: habitName,
            },
        });
        expect(wrapper.props().name).toBe(habitName);
        expect(wrapper.text()).toContain(habitName);
    });

    it("marks the habit as completed", async () => {
        const wrapper = mount(Habit, {
            propsData: {
                name: 'Learn something new',
            },            
        });
        const box = wrapper.find(".habit__box");
        await box.trigger("click");
        expect(box.text()).toContain("✔️")
    });

    it("calls the onHabitDone method", async () => {
        const somethingChanged= jest.spyOn(Habit.methods, 'onHabitDone');
        const wrapper = mount(Habit, {
            propsData: {
                name: 'Learn something new',
            },
        });
        
        const box = wrapper.find(".habit__box");
        await box.trigger("click");
        
        await wrapper.vm.$nextTick();
        expect(somethingChanged).toBeCalled();
    });

    it("updates the habit method", async () => {
        const wrapper = mount(Habit, {
            propsData: {
                name: " Learn something new",
            },
        });
        const newHabitName = "Brush my teeth";
        await wrapper.setProps({
            name: newHabitName,
        });
        expect(wrapper.props().name).toBe(newHabitName);
    });
});