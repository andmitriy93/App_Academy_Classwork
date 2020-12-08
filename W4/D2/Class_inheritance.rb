class Employee
    attr_reader :salary, :boss

    def initialize(name, title, salary, boss)
        #name, title, salary, and boss.
        @name = name
        @title = title
        @salary = salary
        @boss = boss
        if !boss.nil?
            @boss.managers += [self]
        end
    end

    def bonus(multiplier)
        bonus = salary * multiplier
    end
end

class Manager < Employee
    attr_accessor :managers, :salary
    def initialize(name, title, salary, boss)
        @managers = [] #Array of Employee instances
        super 
    end

    def bonus(multiplier)
        salary_of_employee * multiplier
    end

    def salary_of_employee
        #basecase @manager
        return @managers if @managers.length <= 1


        sum = 0
        @managers.each do |employee|
            if employee.is_a?(Array)
                sum = employee.salary_of_employee
            end
            sum += employee.salary
        end
        sum
    end
end

p Ned = Manager.new("Ned", "Founder", 1000000, nil)
p Darren = Manager.new("Darren", "Manager", 78000, Ned)
Shawna = Employee.new("Shawna", "TA", 12000, Darren)
David = Employee.new("David", "TA", 10000, Darren)


p Ned.bonus(5) # => 500_000
p Darren.bonus(4) # => 88_000
p David.bonus(3) # => 30_000