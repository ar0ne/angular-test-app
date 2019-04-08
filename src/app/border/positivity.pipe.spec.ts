import 'zone.js/dist/zone-testing';
import { PositivityPipe } from './positivity.pipe';


describe('PositivityPipe', () => {

    it("should be positive", () => {
        let pipe: PositivityPipe = new PositivityPipe();
        expect(pipe.transform(5)).toBe('positive');        
    });

});