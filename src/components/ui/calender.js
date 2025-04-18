import React, { useState, useRef, useEffect } from 'react';
import { Flex, Icon, Text, Box, Portal } from '@chakra-ui/react';
import { CiCalendar } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const MoveLeftIcon = ({ onClick, isDisabled }) => (
    <Icon
        as={FaChevronLeft}
        width="16px"
        height="16px"
        cursor={isDisabled ? 'not-allowed' : 'pointer'}
        opacity={isDisabled ? 0.5 : 1}
        onClick={isDisabled ? undefined : onClick}
        color="#FFFFFF"
    />
);

const MoveRightIcon = ({ onClick }) => (
    <Icon
        as={FaChevronRight}
        width="16px"
        height="16px"
        cursor="pointer"
        onClick={onClick}
        color="#FFFFFF"
    />
);

const CalendarDayAbbreviation = ({ day }) => (
    <Box
        width="50px"
        height="auto"
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        mb="8px"
        style={{ boxSizing: 'border-box' }}
    >
        <Text
            fontFamily="Montserrat"
            fontWeight={500}
            fontSize="12px"
            lineHeight="100%"
            letterSpacing="0%"
            color="#FFFFFF"
            textAlign="center"
            width="100%"
        >
            {day}
        </Text>
    </Box>
);

const CalendarDayNumber = ({ day, month, year, isPast, isInRange, isStartDate, isEndDate, onSelect }) => (
    <Box
        width="50px"
        height="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="18px"
        fontFamily="Montserrat"
        fontWeight={500}
        borderRadius="8px"
        border={`1px solid ${(isStartDate || isEndDate) ? '#D2AC71' : '#D2AC71'}`}
        backgroundColor={isInRange ? '#EBDDBD' : '#F6EEE5'}
        boxShadow={isInRange ? '0px 0px 3px 0px rgba(0, 0, 0, 0.25) inset' : '0px 0px 3px 0px rgba(0, 0, 0, 0.25) inset'}
        style={{
            boxSizing: 'border-box',
            color: isPast ? '#969696' : (isStartDate || isEndDate) ? '#C58F4A' : '#333333',
            textDecoration: isPast ? 'line-through' : 'none',
            cursor: isPast ? 'default' : 'pointer',
            position: 'relative',
        }}
        onClick={!isPast ? onSelect : undefined}
    >
        {(isStartDate || isEndDate) && (
            <Box
                position="absolute"
                top="50%"
                left={isStartDate ? "5px" : "auto"}
                right={isEndDate ? "5px" : "auto"}
                transform={`translateY(-50%) rotate(${isStartDate ? '90deg' : '-90deg'})`}
                width="15px"
                height="15px"
                borderRadius="3px"
                bg="#D2AC71"
                opacity="0.8"
                style={{
                    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                }}
            />
        )}
        {day}
    </Box>
);

const CalendarItems = () => {
    const [isCalendarBoxVisible, setCalendarBoxVisible] = useState(false);
    const calendarBarRef = useRef(null);
    const [calendarBoxPosition, setCalendarBoxPosition] = useState({ top: 0, left: 0 });
    const [currentDate, setCurrentDate] = useState(new Date());
    const initialDate = useRef(new Date());
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleCalendarClick = () => {
        setCalendarBoxVisible(!isCalendarBoxVisible);
    };

    const goToPreviousMonth = () => {
        setCurrentDate((prevDate) => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() - 1);
            return newDate;
        });
    };

    const goToNextMonth = () => {
        setCurrentDate((prevDate) => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() + 1);
            return newDate;
        });
    };

    useEffect(() => {
        if (isCalendarBoxVisible && calendarBarRef.current) {
            const rect = calendarBarRef.current.getBoundingClientRect();
            setCalendarBoxPosition({
                top: rect.bottom + window.scrollY + 16,
                left: rect.left + window.scrollX - 245,
            });
        } else {
            setCalendarBoxPosition({ top: 0, left: 0 });
        }
    }, [isCalendarBoxVisible]);

    const handleDaySelect = (day) => {
        if (startDate && !endDate && day >= startDate) {
            setEndDate(day);
        } else if (endDate) {
            setStartDate(day);
            setEndDate(null);
        } else {
            setStartDate(day);
        }
    };

    const isDateInRange = (dateToCheck) => {
        if (startDate && endDate) {
            const start = startDate.getTime();
            const end = endDate.getTime();
            const check = dateToCheck.getTime();
            return check >= start && check <= end;
        }
        return false;
    };

    const formatDate = (date) => {
        if (!date) return '';
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    const getDisplayedText = () => {
        if (startDate && endDate) {
            return `${formatDate(startDate)} - ${formatDate(endDate)}`;
        } else if (startDate) {
            return formatDate(startDate);
        } else {
            const currentMonthYear = getDisplayedMonthYear(currentDate);
            const nextMonthYear = getDisplayedMonthYear(getNextMonthDate());
            return `${currentMonthYear} - ${nextMonthYear}`;
        }
    };

    const calendarBoxStyles = {
        position: 'absolute',
        top: `${calendarBoxPosition.top}px`,
        left: `${calendarBoxPosition.left}px`,
        width: '1060px',
        height: 'auto',
        borderRadius: '30px',
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(10px)',
        zIndex: 9999,
        display: 'flex',
        padding: '20px',
    };

    const monthHeaderStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
        width: '380px',
        justifyContent: 'space-between',
    };

    const currentMonthStyle = {
        fontFamily: 'Montserrat',
        fontWeight: 800,
        fontSize: '20px',
        lineHeight: '100%',
        letterSpacing: '0%',
        color: '#FFFFFF',
    };

    const calendarColumnStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const calendarDaysGridStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '5px',
        marginTop: '5px',
        width: '380px',
    };

    const daysOfWeekGridStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '8px',
        width: '380px',
    };

    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const getDaysInMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const renderMonthDays = (date) => {
        const today = new Date();
        const firstDayOfMonth = getFirstDayOfMonth(date);
        const daysInMonth = getDaysInMonth(date);
        const year = date.getFullYear();
        const month = date.getMonth();
        const daysArray = [];

        for (let i = 0; i < firstDayOfMonth; i++) {
            daysArray.push(<Box key={`empty-${month}-${i}`} width="50px" height="50px" style={{ boxSizing: 'border-box' }} />);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const currentDateForComparison = new Date(year, month, i);
            const isPast = currentDateForComparison < today;
            const isInRange = isDateInRange(currentDateForComparison);
            const isStartDate = startDate && currentDateForComparison.toDateString() === startDate.toDateString();
            const isEndDate = endDate && currentDateForComparison.toDateString() === endDate.toDateString();

            daysArray.push(
                <CalendarDayNumber
                    key={`${month}-${i}`}
                    day={i}
                    month={month}
                    year={year}
                    isPast={isPast}
                    isInRange={isInRange}
                    isStartDate={isStartDate}
                    isEndDate={isEndDate}
                    onSelect={() => !isPast && handleDaySelect(currentDateForComparison)}
                />
            );
        }

        while (daysArray.length % 7 !== 0) {
            daysArray.push(<Box key={`padding-${month}-${daysArray.length}`} width="50px" height="50px" style={{ boxSizing: 'border-box' }} />);
        }

        return (
            <Flex style={calendarDaysGridStyle}>
                {daysArray}
            </Flex>
        );
    };

    const getDisplayedMonthYear = (date) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    };

    const getNextMonthDate = () => {
        const nextMonth = new Date(currentDate);
        nextMonth.setMonth(currentDate.getMonth() + 1);
        return nextMonth;
    };

    return (
        <Box position="relative" display="inline-block">
            <Flex
                alignItems="center"
                cursor="pointer"
                onClick={handleCalendarClick}
                ref={calendarBarRef}
            >
                <Icon as={CiCalendar} boxSize={`${26}px`} color="#D2AC71" mr={2} />
                <Text
                    width="auto"
                    height={`${20}px`}
                    fontFamily="Montserrat"
                    fontWeight={600}
                    fontSize="16px"
                    lineHeight="100%"
                    letterSpacing="0%"
                    color="#FFFFFF"
                    textAlign="center"
                >
                    {getDisplayedText()}
                </Text>
            </Flex>

            {isCalendarBoxVisible && (
                <Portal>
                    <Flex style={calendarBoxStyles}>
                        <Box style={calendarColumnStyle}>
                            <Flex style={monthHeaderStyle} alignItems="center">
                                <MoveLeftIcon onClick={goToPreviousMonth} isDisabled={currentDate.getMonth() === initialDate.current.getMonth() && currentDate.getFullYear() === initialDate.current.getFullYear()} />
                                <Text style={currentMonthStyle}>
                                    {getDisplayedMonthYear(currentDate)}
                                </Text>
                                <Box width="16px" />
                            </Flex>
                            <Flex style={daysOfWeekGridStyle}>
                                {daysOfWeek.map((day, index) => (
                                    <CalendarDayAbbreviation key={index} day={day} />
                                ))}
                            </Flex>
                            {renderMonthDays(currentDate)}
                        </Box>

                        <Box style={calendarColumnStyle}>
                            <Flex style={monthHeaderStyle} alignItems="center">
                                <Box width="16px" />
                                <Text style={currentMonthStyle}>
                                    {getDisplayedMonthYear(getNextMonthDate())}
                                </Text>
                                <MoveRightIcon onClick={goToNextMonth} />
                            </Flex>
                            <Flex style={daysOfWeekGridStyle}>
                                {daysOfWeek.map((day, index) => (
                                    <CalendarDayAbbreviation key={index} day={day} />
                                ))}
                            </Flex>
                            {renderMonthDays(getNextMonthDate())}
                        </Box>
                    </Flex>
                </Portal>
            )}
        </Box>
    );
};

export default CalendarItems;